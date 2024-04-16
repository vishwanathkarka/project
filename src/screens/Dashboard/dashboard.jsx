import React from "react";

import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";

import Chip from "../../assets/Chip_Card.png";
import CardLogo1 from "../../assets/card-logo1.svg";
import CardLogo2 from "../../assets/card-logo2.svg";
import CardLogo from "../../assets/cardlogo.svg";
import PayPalLogo from "../../assets/PayPal.svg";
import AmountLogo from "../../assets/AmountLogo.svg";
import Chart from "chart.js/auto";
import Person1 from "../../assets/person1.png";
import { Bar, Pie,Line } from "react-chartjs-2";
import LeftArrow from "../../assets/leftArrow.svg";

import ShareLogo from "../../assets/ShareLogo.svg"

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
};

const Dashboard = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    options: {
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
      y: {
        beginAtZero: true,
      },
      scaleShowVerticalLines: false,
      grid: {
        show: false,
      },
    },
    datasets: [
      {
        label: "Diposit",
        backgroundColor: "#1814f3",
        borderColor: "#1814f3",
        data: [480, 360, 320, 480, 150, 380, 390],
        borderRadius: 50,
        borderWidth: 2,
        borderSkipped: false,
        barPercentage: 0.3,
      },
      {
        label: "Withdraw",
        backgroundColor: "#15dbcc",
        borderColor: "#15dbcc",
        data: [240, 130, 270, 370, 260, 260, 330],
        borderRadius: 50,
        borderWidth: 2,
        borderSkipped: false,
        barPercentage: 0.3,
      },
    ],
  };

  const data2 = {
    labels: ["Bill Expenses", "Other", "Investment", "Entertainment"],
    datasets: [
      {
        label: "Entertainment",
        data: [350, 350, 200, 300],
        backgroundColor: ["#fc7900", "#1814f3", "#fa00ff", "#343c6a"],
        hoverOffset: 4,
      },
  
    ],
    options: {
      legend: {
        display: false
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
  };


const data3 = {
  labels:  ["Jul", "Aug", "Sep", "Oct","Nov","Dec" ,"Jun"],
  
  datasets: [{
    label: 'My First Dataset',
    data: [350, 240, 460, 730, 356, 550, 620],
    fill:'start',
    backgroundColor:'#9db5ff',
    borderColor: '#1814f3',
    tension: 0.4
  }]
};



  return (
    <div className="container">
      <Sidebar />

      <div className="nav">
        <div>
          <Navigation />
          <div className="dash">
            <div className="dashboard-content">
              {/*   -------       card -1      ----- */}
              <div className="card">
                <h4  className="heading-card">My Card</h4>
                <div>
                  <div className="credit-card blue-card">
                    <div className="card-primary">
                      <div className="card-primary-detail">
                        <p>Balance</p>
                        <h2 className="card-price">$5,756</h2>
                      </div>
                      <div>
                        <img
                          src={Chip}
                          alt="chip-logo"
                          height={30}
                          width={30}
                        />
                      </div>
                    </div>

                    <div className="card-details">
                      <div className="cardholder-detail">
                        <p className="card-base-head"> Card Holder</p>
                        <h3 className="card-base-detail">Eddy Cusuma</h3>
                      </div>
                      <div className="cardexpire-detail">
                        <p className="card-base-head">Vaild Thru</p>
                        <h3 className="card-base-detail">12/22</h3>
                      </div>
                    </div>
                    <div className="card-number-details card-design-blue-base">
                      <div>
                        <p className="card-number">3778 **** **** 1234 </p>
                      </div>
                      <div>
                        <img src={CardLogo1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*   -------  X      card -1    X  ----- */}
              {/*   -------       card -2      ----- */}
              <div className="card">
                <h2 className="seeAll ">See All</h2>
                <div>
                  <div className="credit-card card-white">
                    <div className="card-primary">
                      <div className="card-primary-detail">
                        <p>Balance</p>
                        <h2 className="card-price">$5,756</h2>
                      </div>
                      <div>
                        <img
                          src={Chip}
                          alt="chip-logo"
                          height={30}
                          width={30}
                        />
                      </div>
                    </div>

                    <div className="card-details">
                      <div className="cardholder-detail">
                        <p className="card-base-head"> Card Holder</p>
                        <h3 className="card-base-detail">Eddy Cusuma</h3>
                      </div>
                      <div className="cardexpire-detail">
                        <p className="card-base-head">Vaild Thru</p>
                        <h3 className="card-base-detail">12/22</h3>
                      </div>
                    </div>
                    <div className="card-number-details white-design-card-base">
                      <div>
                        <p className="card-number">3778 **** **** 1234 </p>
                      </div>
                      <div>
                        <img src={CardLogo2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*   ------- X      card -2   X  ----- */}

              <div className="card">
                <h4  className="heading-card">Recent Transaction</h4>
                <div>
                  <div className="credit-card card-white transaction-details">
                    <div className="transaction-detail">
                      <div className="">
                        <img src={CardLogo} alt="" />
                      </div>
                      <div className="">
                        <p>Deposit from my card</p>
                        <p className="tran-date">28 January 2021 </p>
                      </div>
                      <div className="debit">-$850</div>
                    </div>
                    <div className="transaction-detail">
                      <div>
                        <img src={PayPalLogo} alt="" />
                      </div>
                      <div>
                        <p>Deposit Paypal</p>
                        <p className="tran-date">28 January 2021</p>
                      </div>
                      <div className="credited">+$2,500</div>
                    </div>

                    <div className="transaction-detail">
                      <div>
                        <img src={AmountLogo} alt="" />
                      </div>
                      <div>
                        <p>Jemi Wilson</p>
                        <p className="tran-date">28 January 2021</p>
                      </div>
                      <div className="credited">+$5,400</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="chart-container">
              <div>
                <h4 className="heading-card">Weekly Activity</h4>
              <div className="chart-bar">
                <Bar data={data} height="300rem" width= "900rem"  />
              </div>
              </div>
              <div>
                <h4 className="heading-card">Expense Statistics</h4>
              <div className="chart-pie">
                <Pie data={data2} width= "100%" height="100%" />
              </div>
              </div>
            </div>

            {/* ------------        profile details     ---------------*/}
        <div className="base-diagrams">
          
            <div className="">
              <h4 className="heading-card">Quick Transaction</h4>
              <div className="profile-details">
                <div className="profile-pic-details">

                  <div className="profile-card">
                    <div className="Person-profile">
                      <img src={Person1} alt="" width="100%" height="100%" />
                    </div>
                    <p className="profile-title">Livia Bator</p>
                    <p className="profile-role">CEO</p>
                  </div>
                  <div className="profile-card">
                    <div className="Person-profile">
                      <img src={Person1} alt="" width="100%" height="100%" />
                    </div>
                    <p className="profile-title">Livia Bator</p>
                    <p className="profile-role">CEO</p>
                  </div>

                  <div className="profile-card">
                    <div className="Person-profile">
                      <img src={Person1} alt="" width="100%" height="100%" />
                    </div>
                    <p className="profile-title">Livia Bator</p>
                    <p className="profile-role">CEO</p>
                  </div>

<div>
  <img src={LeftArrow} alt="" />
</div>

                </div>

                <div className="amount-action-field">
                  <p className="amount-text">Write Amount</p>

                  <div className="amount-input">
                    <input type="text" className="" placeholder="525.50" />
                    <button className="share-button">
                      <p className="">
                      Send 
                      </p>
<img src={ShareLogo} alt="" width="20px" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="heading-card">Balance History</h4>
<div className="chart-line">

  <Line data={data3}   height="13rem"
  width="30rem" />
</div>
</div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
