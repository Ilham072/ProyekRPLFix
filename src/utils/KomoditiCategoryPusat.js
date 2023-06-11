import React, { useState, useEffect } from "react";
import kategoriKomoditiPusat from "../config/KomoditiCategory/kategori_KomoditiPusat.json";
import CardKomoditiCategoryPusat from "../components/Card/KomoditiCategory/CardKomoditiCategoryPusat";
import axios from "axios";

const KomoditiCategoryPusat = () => {
    const [kategoriKomoditi, setKategoriKomoditiPusat] = useState([]);
    const token = localStorage.getItem('token');
    const fetchKategoriKomoditi = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/CountSektor`)
        setKategoriKomoditiPusat(response?.data);
        
    }

    useEffect(() => {
        fetchKategoriKomoditi()
    }, []);

    useEffect(() => {
        for (let i=0; i < kategoriKomoditiPusat.length; i++) {
            for (let j=0; j < kategoriKomoditiPusat.length; j++) {
                if (kategoriKomoditiPusat[i].name === kategoriKomoditi[j]?.sektor) {
                    kategoriKomoditiPusat[i].count = kategoriKomoditi[j]?.count
                }
            }
        }
    }, [kategoriKomoditi]);
    
    return (
        <div style={
            {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                flexBasis: '30%', 
            }
        }>
            {
                kategoriKomoditiPusat && kategoriKomoditiPusat.map(item => {
                    return (
                     <CardKomoditiCategoryPusat key={item.id} komoditi={item}/>
                    ) 
                 })
            }
        </div>
    )
}

export default KomoditiCategoryPusat;