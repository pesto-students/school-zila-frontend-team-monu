import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dash-main">
      <div className="dash-sub-top">
        <svg
          width="52"
          height="52"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="72" height="72" rx="36" fill="#EE86B8" />
          <g clip-path="url(#clip0_2_483)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.9288 54.75H24.75C22.6788 54.75 21 53.0713 21 51V40.5863C21 38.7738 22.2962 37.2213 24.0787 36.8975C26.7212 36.4163 31.2775 35.5875 33.855 35.12C35.2737 34.8612 36.7263 34.8612 38.145 35.12C40.7225 35.5875 45.2788 36.4163 47.9213 36.8975C49.7038 37.2213 51 38.7738 51 40.5863C51 43.3125 51 48.0825 51 51C51 53.0713 49.3212 54.75 47.25 54.75H33.9288ZM45.785 39.05L45.79 39.0563C46.0088 39.3838 46.06 39.795 45.9287 40.1662L45.0462 42.6662C44.9312 42.9925 44.685 43.2575 44.3675 43.3963L42.7075 44.12L43.3675 45.4412C43.5525 45.81 43.5425 46.2462 43.3425 46.6075L40.2075 52.25H47.25C47.94 52.25 48.5 51.69 48.5 51C48.5 48.0825 48.5 43.3125 48.5 40.5863C48.5 39.9825 48.0675 39.465 47.4738 39.3562L45.785 39.05ZM42.3663 38.4275L37.6975 37.5788C36.575 37.375 35.425 37.375 34.3025 37.5788L29.6337 38.4275L28.6363 39.9238L29.13 41.3213L31.5 42.3537C31.8138 42.4912 32.0575 42.7512 32.175 43.0737C32.2925 43.3962 32.2712 43.7525 32.1175 44.0588L31.1625 45.9688L34.6525 52.25H37.3475L40.8375 45.9688L39.8825 44.0588C39.7288 43.7525 39.7075 43.3962 39.825 43.0737C39.9425 42.7512 40.1862 42.4912 40.5 42.3537L42.87 41.3213L43.3638 39.9238L42.3663 38.4275ZM26.215 39.05L24.5262 39.3562C23.9325 39.465 23.5 39.9825 23.5 40.5863V51C23.5 51.69 24.06 52.25 24.75 52.25H31.7925L28.6575 46.6075C28.4575 46.2462 28.4475 45.81 28.6325 45.4412L29.2925 44.12L27.6325 43.3963C27.315 43.2575 27.0688 42.9925 26.9538 42.6662L26.0712 40.1662C25.94 39.795 25.9912 39.3838 26.21 39.0563L26.215 39.05ZM44.75 46V48.5C44.75 49.19 45.31 49.75 46 49.75C46.69 49.75 47.25 49.19 47.25 48.5V46C47.25 45.31 46.69 44.75 46 44.75C45.31 44.75 44.75 45.31 44.75 46ZM36 17.25C31.5163 17.25 27.875 20.8913 27.875 25.375C27.875 29.8587 31.5163 33.5 36 33.5C40.4837 33.5 44.125 29.8587 44.125 25.375C44.125 20.8913 40.4837 17.25 36 17.25ZM36 19.75C39.105 19.75 41.625 22.27 41.625 25.375C41.625 28.48 39.105 31 36 31C32.895 31 30.375 28.48 30.375 25.375C30.375 22.27 32.895 19.75 36 19.75Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_483">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(16 16)"
              />
            </clipPath>
          </defs>
        </svg>
        <span style={{ marginLeft: "10px" }}>
          <div>students</div>
          <span>1932</span>
        </span>
      </div>
      <div className="dash-sub-top">
        <svg
          width="52"
          height="52"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="72" height="72" rx="36" fill="#FB7D5B" />
          <g clip-path="url(#clip0_2_491)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21 51C21 53.0713 22.6788 54.75 24.75 54.75H47.25C49.3212 54.75 51 53.0713 51 51C51 48.0825 51 43.3125 51 40.5863C51 38.7738 49.7038 37.2213 47.9213 36.8975C45.2788 36.4163 40.7225 35.5875 38.145 35.12C36.7263 34.8612 35.2737 34.8612 33.855 35.12C31.2775 35.5875 26.7212 36.4163 24.0787 36.8975C22.2962 37.2213 21 38.7738 21 40.5863V51ZM38.885 37.795L40.7612 44.9288C41.0075 45.865 40.6775 46.8588 39.92 47.4638C39.28 47.9738 38.2713 48.7788 37.5713 49.3388C36.6525 50.0713 35.3475 50.0713 34.4287 49.3388C33.7287 48.7788 32.72 47.9738 32.08 47.4638C31.3225 46.8588 30.9925 45.865 31.2388 44.9288L33.115 37.795L24.5262 39.3562C23.9325 39.465 23.5 39.9825 23.5 40.5863V51C23.5 51.69 24.06 52.25 24.75 52.25C29.98 52.25 42.02 52.25 47.25 52.25C47.94 52.25 48.5 51.69 48.5 51C48.5 48.0825 48.5 43.3125 48.5 40.5863C48.5 39.9825 48.0675 39.465 47.4738 39.3562L38.885 37.795ZM36.2038 37.4288C36.0675 37.425 35.9325 37.425 35.7962 37.4288L33.6663 45.5312L35.9887 47.3837C35.995 47.39 36.005 47.39 36.0113 47.3837L38.3337 45.5312L36.2038 37.4288ZM36 17.25C31.5163 17.25 27.875 20.8913 27.875 25.375C27.875 29.8587 31.5163 33.5 36 33.5C40.4837 33.5 44.125 29.8587 44.125 25.375C44.125 20.8913 40.4837 17.25 36 17.25ZM36 19.75C39.105 19.75 41.625 22.27 41.625 25.375C41.625 28.48 39.105 31 36 31C32.895 31 30.375 28.48 30.375 25.375C30.375 22.27 32.895 19.75 36 19.75Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_491">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(16 16)"
              />
            </clipPath>
          </defs>
        </svg>
        <span style={{ marginLeft: "10px" }}>
          <div>Teachers</div>
          <span>754</span>
        </span>
      </div>
      <div className="dash-sub-top">
        <svg
          width="52"
          height="52"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="72" height="72" rx="36" fill="#FCC43E" />
          <path
            d="M46 24.75H43.5V23.5C43.5 23.1685 43.3683 22.8505 43.1339 22.6161C42.8995 22.3817 42.5815 22.25 42.25 22.25C41.9185 22.25 41.6005 22.3817 41.3661 22.6161C41.1317 22.8505 41 23.1685 41 23.5V24.75H37.25V23.5C37.25 23.1685 37.1183 22.8505 36.8839 22.6161C36.6495 22.3817 36.3315 22.25 36 22.25C35.6685 22.25 35.3505 22.3817 35.1161 22.6161C34.8817 22.8505 34.75 23.1685 34.75 23.5V24.75H31V23.5C31 23.1685 30.8683 22.8505 30.6339 22.6161C30.3995 22.3817 30.0815 22.25 29.75 22.25C29.4185 22.25 29.1005 22.3817 28.8661 22.6161C28.6317 22.8505 28.5 23.1685 28.5 23.5V24.75H26C25.0054 24.75 24.0516 25.1451 23.3483 25.8483C22.6451 26.5516 22.25 27.5054 22.25 28.5V46C22.25 46.9946 22.6451 47.9484 23.3483 48.6517C24.0516 49.3549 25.0054 49.75 26 49.75H46C46.9946 49.75 47.9484 49.3549 48.6517 48.6517C49.3549 47.9484 49.75 46.9946 49.75 46V28.5C49.75 27.5054 49.3549 26.5516 48.6517 25.8483C47.9484 25.1451 46.9946 24.75 46 24.75ZM24.75 28.5C24.75 28.1685 24.8817 27.8505 25.1161 27.6161C25.3505 27.3817 25.6685 27.25 26 27.25H28.5V28.5C28.5 28.8315 28.6317 29.1495 28.8661 29.3839C29.1005 29.6183 29.4185 29.75 29.75 29.75C30.0815 29.75 30.3995 29.6183 30.6339 29.3839C30.8683 29.1495 31 28.8315 31 28.5V27.25H34.75V28.5C34.75 28.8315 34.8817 29.1495 35.1161 29.3839C35.3505 29.6183 35.6685 29.75 36 29.75C36.3315 29.75 36.6495 29.6183 36.8839 29.3839C37.1183 29.1495 37.25 28.8315 37.25 28.5V27.25H41V28.5C41 28.8315 41.1317 29.1495 41.3661 29.3839C41.6005 29.6183 41.9185 29.75 42.25 29.75C42.5815 29.75 42.8995 29.6183 43.1339 29.3839C43.3683 29.1495 43.5 28.8315 43.5 28.5V27.25H46C46.3315 27.25 46.6495 27.3817 46.8839 27.6161C47.1183 27.8505 47.25 28.1685 47.25 28.5V32.25H24.75V28.5ZM47.25 46C47.25 46.3315 47.1183 46.6495 46.8839 46.8839C46.6495 47.1183 46.3315 47.25 46 47.25H26C25.6685 47.25 25.3505 47.1183 25.1161 46.8839C24.8817 46.6495 24.75 46.3315 24.75 46V34.75H47.25V46Z"
            fill="white"
          />
        </svg>
        <span style={{ marginLeft: "10px" }}>
          <div>Events</div>
          <span>40</span>
        </span>
      </div>
    </div>
  );
}
