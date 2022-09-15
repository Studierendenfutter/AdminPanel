import React, { useState, useEffect } from "react";
import fetchStatistics from "../../services/backend/fetchStatistics";
import Chart from "react-apexcharts";
import getDateString from "../../services/utils/getDateString";
import formatPrice from "../../services/utils/formatPrice";
import "./Stats.css";

export default function Stats() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const stats = await fetchStatistics();
      setData(stats);
    }
    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  const xLabels = data
    ? data.emailsOpenedDaily.map((eod) => getDateString(new Date(eod.date)))
    : [];

  return (
    <div>
      <h1 className="sf-stats-title">Admin Panel</h1>
      <div className="sf-stats-big-numbers">
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">{data.activeUsers}</span>
          <span>active users</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">{data.emailsSend}</span>
          <span>emails send</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {data.emailsOpened}
          </span>
          <span>emails opened</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {data.lunchletterSend}
          </span>
          <span>lunchletter send</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {data.lunchletterOpened}
          </span>
          <span>lunchletter opened</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {data.emailsSendToday}
          </span>
          <span>send today</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {data.emailsOpenedToday}
          </span>
          <span>opened today</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {((data.emailsOpenedToday / data.emailsSendToday) * 100).toFixed(2)}
          </span>
          <span>% opened today</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {formatPrice(data.avgUserLifetime)}
          </span>
          <span>avg user lifetime</span>
        </div>
      </div>
      <div>
        <h2 className="sf-stats-heading">Emails send per day</h2>
        <Chart
          options={{
            chart: {
              id: "sf-email-chart",
            },
            stroke: {
              curve: "smooth",
            },
            xaxis: {
              categories: xLabels,
            },
          }}
          series={[
            {
              name: "emails opened",
              data: data ? data.emailsOpenedDaily.map((eod) => eod.count) : [],
            },
            {
              name: "emails send",
              data: data
                ? data.emailsSendDaily.reduce((all, eod) => {
                    if (xLabels.includes(getDateString(new Date(eod.date))))
                      return all.concat(eod.count);
                    return all;
                  }, [])
                : [],
            },
          ]}
          type="line"
          width={"100%"}
          height={320}
        />
      </div>
      <div>
        <h2 className="sf-stats-heading">User Signups/Deletions</h2>
        <Chart
          options={{
            chart: {
              id: "sf-user-chart",
            },
            xaxis: {
              categories: data
                ? data.userSignupsPerMonth.map((us) => us.year + "-" + us.month)
                : [],
            },
          }}
          series={[
            {
              name: "signups",
              data: data ? data.userSignupsPerMonth.map((us) => us.count) : [],
            },
            {
              name: "deletions",
              data: data
                ? data.userSignupsPerMonth.map((us) => {
                    const month = data.userDeletionsPerMonth.find(
                      (ud) => us.year === ud.year && us.month === ud.month
                    );
                    if (month) {
                      return month.count;
                    }
                    return 0;
                  })
                : [],
            },
          ]}
          type="line"
          width={"100%"}
          height={320}
        />
      </div>
      <div>
        <h2 className="sf-stats-heading">
          Amount of users that opened x lunchletters over the last seven days
        </h2>
        <Chart
          options={{
            chart: {
              id: "sf-user-chart",
            },
            xaxis: {
              categories: [
                "4 weeks ago",
                "3 weeks ago",
                "2 weeks ago",
                "1 week ago",
                "This week",
              ],
            },
          }}
          series={[1, 2, 3, 4, 5, 6].map((id) => ({
            data: data.cohortAnalysis.map((cohort) => cohort[id]),
            name: id,
          }))}
          type="line"
          width={"100%"}
          height={320}
        />
      </div>
      <div>
        <h2 className="sf-stats-heading">
          Percentage of users that opened x lunchletters over the last seven
          days
        </h2>
        <Chart
          options={{
            chart: {
              id: "sf-user-chart",
            },
            xaxis: {
              categories: [
                "4 weeks ago",
                "3 weeks ago",
                "2 weeks ago",
                "1 week ago",
                "This week",
              ],
            },
          }}
          series={[1, 2, 3, 4, 5, 6].map((id) => ({
            data: data.cohortAnalysis.map((cohort) =>
              cohort.total === 0
                ? 0
                : Math.floor((cohort[id] / cohort.total) * 100)
            ),
            name: id,
          }))}
          type="line"
          width={"100%"}
          height={320}
        />
      </div>
    </div>
  );
}
