import React from 'react';
import footerImage from './footer-bottom-bg.png';
import headerImage from './header_bg.jpg';
import aparatIcon from './logo--color-black@16px.png';
import './footer.css';

const footerColumns = [
  {
    columnTitle: 'سامانه های پرکاربرد',
    items: [
      {
        itemTitle: 'سامانه دبیرخانه محرمانه بانک',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه جامع منابع انسانی',
        itemLink: '',
      },
      {
        itemTitle: 'بانکداری اینترنتی',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه اتوماسیون اداری',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه ستاک',
        itemLink: '',
      },
      {
        itemTitle: 'سهام عدالت',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه تیکتینک',
        itemLink: '',
      },
    ],
  },
  {
    columnTitle: 'لینک های مفید',
    items: [
      {
        itemTitle: 'بخشنامه ها و اطلاعیه ها',
        itemLink: '',
      },
      {
        itemTitle: 'راهنمای تلفن ادارات',
        itemLink: '',
      },
      {
        itemTitle: 'راهنمای تلفن مدیریت شعب',
        itemLink: '',
      },
      {
        itemTitle: 'راهنمای تلفن شعب',
        itemLink: '',
      },
      {
        itemTitle: 'بانک ملت در بورس',
        itemLink: '',
      },
      {
        itemTitle: 'پست الکترونیک بانک',
        itemLink: '',
      },
      {
        itemTitle: 'باشگاه مشتریان',
        itemLink: '',
      },
    ],
  },
  {
    columnTitle: 'سایر لینک ها',
    items: [
      {
        itemTitle: 'منشور اخلاقی',
        itemLink: '',
      },
      {
        itemTitle: 'مضامین استراتژیک بانک ملت',
        itemLink: '',
      },
      {
        itemTitle: 'نظام پیشنهادها',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه جامع شعب (Branch)',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه مدیریت پروژه',
        itemLink: '',
      },
      {
        itemTitle: 'وب سایت اینترنتی بانک',
        itemLink: '',
      },
      {
        itemTitle: 'پورتال اینترانت قدیمی',
        itemLink: '',
      },
    ],
  },
];

export default function Footer() {
  return (
    // <>
    //   <div className="border">
    // <footer className="fixed-bottom mt-5">
    <footer className="row mx-0 bg-warning flex-shrink-0">
      <div
        className="row justify-content-center bg-secondary-subtle"
        // style={{ 'background-image': `url(${headerImage})` }}
        // style={{ 'background-color': `rgb(231, 231, 231)` }}
      >
        {footerColumns.map((column) => {
          return (
            <div className="col-4 mb-3" key={column['columnTitle']}>
              <h5 className="text-white border-bottom border-dark-subtle py-2 fs-6 fw-normal">
                {column['columnTitle']}
              </h5>
              <ul className="nav flex-column">
                {column['items'].map((item) => {
                  return (
                    <li
                      className="nav-item mb-2 border-bottom border-1 border-dark-subtle"
                      key={item['itemTitle']}
                    >
                      <a
                        href="#"
                        className="nav-link p-0 fs-7 fw-lighter icon-link icon-link-hover"
                        style={{ 'a:hover': 'font-weight: 900' }}
                      >
                        {item['itemTitle']}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div
        className="row justify-content-between border-top"
        // style={{ 'background-image': `url(${footerImage})` }}
        style={{ backgroundColor: `#58595b` }}
      >
        <p>&copy; 2023 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="link-body-emphasis"
              href="www.aparat.com/bankmellat.official"
              // style={{ 'background-image': `url(${aparatIcon})` }}
              style={{ backgroundImage: `url(${aparatIcon})` }}
            >
              {/* <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter" />
                  </svg> */}
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    //   </div>
    // </>
  );
}

// {
//   columnTitle: 'درباره ملت',
//   items: [
//     {
//       itemTitle: 'ساختار سازمانی',
//       itemLink: 'https://www.bankmellat.ir/Organizational_Structure.aspx',
//     },
//     {
//       itemTitle: 'آرشیو اخبار',
//       itemLink: 'https://www.bankmellat.ir/newsarchive.aspx',
//     },
//     {
//       itemTitle: 'افتخارات ملی و بین المللی',
//       itemLink: 'https://www.bankmellat.ir/Letter_of_commendation.aspx',
//     },
//     {
//       itemTitle: 'ملت در بورس',
//       itemLink:
//         'http://www.tsetmc.com/loader.aspx?partree=151311&i=778253364357513',
//     },
//     {
//       itemTitle: 'رسیدگی به شکایات',
//       itemLink: 'https://www.bankmellat.ir/Complaints.aspx',
//     },
//   ],
// },
// {
//   columnTitle: 'شعب و واحدها',
//   items: [
//     {
//       itemTitle: 'شعب داخلی',
//       itemLink: 'https://www.bankmellat.ir/Local_branches.aspx',
//     },
//     {
//       itemTitle: 'واحدها، بخش ها و باجه های ارزی',
//       itemLink: 'https://www.bankmellat.ir/Currency_units.aspx',
//     },
//     {
//       itemTitle: 'شعب ارائه دهنده خدمات بیمه ما',
//       itemLink: 'https://www.bankmellat.ir/bimehma_services.aspx',
//     },
//     {
//       itemTitle: 'ادارات کل و مدیریت های شعب',
//       itemLink:
//         'https://www.bankmellat.ir/Branches_of_administration_and_management.aspx',
//     },
//     {
//       itemTitle: 'مرکز ارتباط ملت',
//       itemLink: 'https://www.bankmellat.ir/mellat_contact_center.aspx',
//     },
//   ],
// },
