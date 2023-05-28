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
import PertanianBerandaAdmin from './pages/pagesAdminKecamatan/PagePertanianAdmin/PertanianBerandaAdmin';
import PerikananBerandaAdmin from './pages/pagesAdminKecamatan/PagePerikananAdmin/PerikananBerandaAdmin';
import PeternakanBerandaAdmin from './pages/pagesAdminKecamatan/PagePeternakanAdmin/PeternakanBerandaAdmin';
import PerindustrianBerandaAdmin from './pages/pagesAdminKecamatan/PagePerindustrian/PerindustrianBerandaAdmin';
import PariwisataBerandaAdmin from './pages/pagesAdminKecamatan/PagePariwisataAdmin/PariwisataBerandaAdmin';
import BerandaPusat from './pages/pagesAdminPusat/BerandaAdminPusat/BerandaPusat';
import PertanianAdminPusat from './pages/pagesAdminPusat/PertanianAdminPusat/PertanianAdminPusat';
import PeternakanAdminPusat from './pages/pagesAdminPusat/PeternakanAdminPusat/PeternakanAdminPusat';
import PerikananAdminPusat from './pages/pagesAdminPusat/PerikananAdminPusat/PerikananAdminPusat';
import PerindustrianAdminPusat from './pages/pagesAdminPusat/PerindustrianAdminPusat/PerindustrianAdminPusat';
import PariwisataAdminPusat from './pages/pagesAdminPusat/PariwisataAdminPusat/PariwisataAdminPusat';
import DataKomoditi from './pages/pagesAdminPusat/DataKomoditi/DataKomoditi';
import PageInputBanner from './pages/pagesAdminPusat/PageInputKonten/PageInputBanner';
import PageDataBerita from './pages/pagesAdminPusat/PageInputKonten/PageDataBerita';
import PageInputBerita from './pages/pagesAdminPusat/PageInputKonten/PageInputBerita';
import PageKontenKomoditi from './pages/pagesAdminPusat/PageInputKonten/PageKontenKomoditi';
import EditDataPertanian from './pages/pagesAdminKecamatan/PagePertanianAdmin/InputDataPertanian/EditDataPertanian';
import EditDataPerikanan from './pages/pagesAdminKecamatan/PagePerikananAdmin/InputDataPerikanan/EditDataPerikanan';
import EditDataPeternakan from './pages/pagesAdminKecamatan/PagePeternakanAdmin/InputDataPeternakan/EditDataPeternakan';
import EditDataPerindustrian from './pages/pagesAdminKecamatan/PagePerindustrian/InputDataPerindustrian/EditDataPerindustrian';
import EditDataPariwisata from './pages/pagesAdminKecamatan/PagePariwisataAdmin/InputDataPariwisata/EditDataPariwisata';
import PageDataAdmin from './pages/pagesAdminPusat/PageDataAdmin/PageDataAdmin';
import PageInputAdmin from './pages/pagesAdminPusat/PageDataAdmin/PageInputAdmin'
import PageInputKontenKomoditi from './pages/pagesAdminPusat/PageInputKonten/PageInputKontenKomoditi';
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
    path: "/beranda_adminpertanian",
    element: <PertanianBerandaAdmin/>,
  },
  {
    path: "/beranda_adminpeternakan",
    element: <PeternakanBerandaAdmin/>,
  },
  {
    path: "/beranda_adminperikanan",
    element: <PerikananBerandaAdmin/>,
  },
  {
    path: "/beranda_adminperindustrian",
    element: <PerindustrianBerandaAdmin/>,
  },
  {
    path: "/beranda_adminpariwisata",
    element: <PariwisataBerandaAdmin/>,
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
    path: "/editDataPertanian",
    element: <PageInputDataPertanian/>
  },
  {
    path: "/tambahDataPeternakan",
    element: <PageInputDataPeternakan/>,
  },
  {
    path: "/editDataPeternakan",
    element: <PageInputDataPeternakan/>
  },
  {
    path: "/tambahDataPerikanan",
    element: <PageInputDataPerikanan/>,
  },
  {
    path: "/editDataPerikanan",
    element: <PageInputDataPerikanan/>
  },
  {
    path: "/tambahDataPerindustrian",
    element: <PageInputDataPerindustrian/>,
  },
  {
    path: "/editDataPerindustrian",
    element: <PageInputDataPerindustrian/>,
  },
  {
    path: "/tambahDataPariwisata",
    element: <PageInputDataPariwisata/>,
  },
  {
    path: "/editDataPariwisata",
    element: <PageInputDataPariwisata/>
  },
  {
    path: "/berandaAdminPusat",
    element: <BerandaPusat/>,
  },
  {
    path: "/pertanianAdminPusat",
    element: <PertanianAdminPusat/>,
  },
  {
    path: "/peternakanAdminPusat",
    element: <PeternakanAdminPusat/>,
  },
  {
    path: "/perikanaAdminPusat",
    element: <PerikananAdminPusat/>,
  },
  {
    path: "/perindustrianAdminPusat",
    element: <PerindustrianAdminPusat/>,
  },
  {
    path: "/pariwisataAdminPusat",
    element: <PariwisataAdminPusat/>,
  },
  {
    path: "/DataAdminPusat",
    element: <DataKomoditi/>,
  },
  {
    path: "/banner",
    element: <PageInputBanner/>,
  },
  {
    path: "/berita",
    element: <PageDataBerita/>,
  },
  {
    path: "/tambahdataBerita",
    element: <PageInputBerita/>,
  },
  {
    path: "/editDataBerita",
    element: <PageInputBerita/>
  },
  {
    path: "/kontenKomoditi",
    element: <PageKontenKomoditi/>,
  },
  {
    path: "/editDataPertanian",
    element: <EditDataPertanian/>,
  },
  {
    path: "/editDataPerikanan",
    element: <EditDataPerikanan/>,
  },
  {
    path: "/editDataPeternakan",
    element: <EditDataPeternakan/>,
  },
  {
    path: "/editDataPerindustrian",
    element: <EditDataPerindustrian/>,
  },
  {
    path: "/editDataPariwisata",
    element: <EditDataPariwisata/>,
  },
  {
    path: "/dataAdmin",
    element: <PageDataAdmin/>,
  },
  {
    path: "/tambahAdmin",
    element: <PageInputAdmin/>,
  },
  {
    path: "/editAdmin",
    element: <PageInputAdmin/>,
  },
  {
    path: "/inputKontenKomoditi",
    element: <PageInputKontenKomoditi/>,
  },
  {
    path: "/editKontenKomoditi",
    element: <PageInputKontenKomoditi/>,
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
