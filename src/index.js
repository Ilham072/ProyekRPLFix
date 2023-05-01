import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route  } from 'react-router-dom';
import Login from './pages/Login/Login';
import Beranda from './pages/pagesUser/Beranda/Beranda';
import PageNews from './pages/PageNews/PageNews';
import PertanianUser from './pages/pagesUser/Pertanian/PertanianUser';
import PeternakanUser from './pages/pagesUser/Peternakan/PeternakanUser';
import PerikananUser from './pages/pagesUser/Perikanan/PerikananUser';
import PerindustrianUser from './pages/pagesUser/Perindustrian/PerindustrianUser';
import PariwisataUser from './pages/pagesUser/Pariwisata/PariwisataUser';
import KomoditiContent from './pages/PageKomoditiContent/KomoditiContent';
import BerandaAdmin from './pages/pagesAdminKecamatan/BerandaAdmin/BerandaAdmin';
import PertanianAdmin from './pages/pagesAdminKecamatan/PagePertanianAdmin/PertanianAdmin';
import PeternakanAdmin from './pages/pagesAdminKecamatan/PagePeternakanAdmin/PeternakanAdmin';
import PerikananAdmin from './pages/pagesAdminKecamatan/PagePerikananAdmin/PerikananAdmin';
import PerindustrianAdmin from './pages/pagesAdminKecamatan/PagePerindustrian/PerindustrianAdmin';
import PariwisataAdmin from './pages/pagesAdminKecamatan/PagePariwisataAdmin/PariwisataAdmin';
import PageInputDataPertanian from './pages/pagesAdminKecamatan/PagePertanianAdmin/InputDataPertanian/PageInputDataPertanian';
import PageInputDataPeternakan from './pages/pagesAdminKecamatan/PagePeternakanAdmin/InputDataPeternakan/PageInputDataPeternakan';
import PageInputDataPerikanan from './pages/pagesAdminKecamatan/PagePerikananAdmin/InputDataPerikanan/PageInputDataPerikanan';
import PageInputDataPerindustrian from './pages/pagesAdminKecamatan/PagePerindustrian/InputDataPerindustrian/PageInputDataPerindustrian';
import PageInputDataPariwisata from './pages/pagesAdminKecamatan/PagePariwisataAdmin/InputDataPariwisata/PageInputDataPariwisata';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/pagenews",
    element: <PageNews/>,
  },
  {
    path: "/Pertanian",
    element: <PertanianUser/>,
  },
  {
    path: "/Peternakan",
    element: <PeternakanUser/>,
  },
  {
    path: "/Perikanan",
    element: <PerikananUser/>,
  },
  {
    path: "/Perindustrian",
    element: <PerindustrianUser/>,
  },
  {
    path: "/Pariwisata",
    element: <PariwisataUser/>,
  },
  {
    path: "/KomoditiContent",
    element: <KomoditiContent/>,
  },
  {
    path: "/berandaAdmin",
    element: <BerandaAdmin/>,
  },
  {
    path: "/adminpertanian",
    element: <PertanianAdmin/>,
  },
  {
    path: "/adminpeternakan",
    element: <PeternakanAdmin/>,
  },
  {
    path: "/adminperikanan",
    element: <PerikananAdmin/>,
  },
  {
    path: "/adminperindustrian",
    element: <PerindustrianAdmin/>,
  },
  {
    path: "/adminpariwisata",
    element: <PariwisataAdmin/>,
  },
  {
    path: "/tambahDataPertanian",
    element: <PageInputDataPertanian/>,
  },
  {
    path: "/tambahDataPeternakan",
    element: <PageInputDataPeternakan/>,
  },
  {
    path: "/tambahDataPerikanan",
    element: <PageInputDataPerikanan/>,
  },
  {
    path: "/tambahDataPerindustrian",
    element: <PageInputDataPerindustrian/>,
  },
  {
    path: "/tambahDataPariwisata",
    element: <PageInputDataPariwisata/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
