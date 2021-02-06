import React, { useState, useEffect } from "react";
import fetchStatistics from "../../services/backend/fetchStatistics";
import Chart from "react-apexcharts";
import getDateString from "../../services/utils/getDateString";

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
    ? data.emailsOpenedDaily.map((eod) =>
      getDateString(new Date(eod.date))
    )
    : []

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
          <span className="sf-stats-big-number-number">{data.lunchletterSend}</span>
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
      </div>
      <div>
        <h2 className="sf-stats-heading">Emails send per day</h2>
        <Chart
          options={{
            chart: {
              id: "sf-email-chart",
            },
            xaxis: {
              categories: xLabels
            },
          }}
          series={[
            {
              name: "emails opened",
              data: data ? data.emailsOpenedDaily.map((eod) => eod.count) : [],
            },
            {
              name: "emails send",
              data: data ? data.emailsSendDaily.reduce(
                (all, eod) => {
                  console.log(all, eod)
                  if (xLabels.includes(getDateString(new Date(eod.date))))
                    return all.concat(eod.count)
                  return all
                }, []) : [],
            },
          ]}
          type="line"
          width={"100%"}
          height={320}
        />
      </div>
      <div>
        <h2 className="sf-stats-heading">New Signups</h2>
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
          ]}
          type="line"
          width={"100%"}
          height={320}
        />
      </div>
    </div>
  );
}
