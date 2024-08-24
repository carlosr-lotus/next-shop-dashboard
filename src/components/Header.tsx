import { IoSearch, IoNotificationsSharp } from "react-icons/io5"
import { CiUser } from "react-icons/ci";
import { FaChartSimple } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { SiShopee } from "react-icons/si";

import styles from "@/styles/components/Header.module.css"

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <SiShopee size={30}/>
            </div>

            <ul className={styles.headerMenu}>
                <li>Transações</li>
                <li>Performance</li>
                <li>Risco</li>
                <li>Ponto de venda</li>
                <li>Finanças</li>
                <li>Relatórios</li>
                <li>Conta</li>
            </ul> 

            <div className={styles.sectionTwoMobile}>
                <div className={styles.iconDashboard}>
                    <FaChartSimple size={25} /> 
                </div>
            </div>

            <div className={styles.sectionTwo}>
                <div className={styles.icons}>
                    <IoSearch size={20}/>
                    <IoNotificationsSharp size={20}/>
                    <CiUser size={20}/>
                </div> 
                <div className={styles.company}>
                    <div>
                        <p>Empresa S</p> 
                        <span>Mercador005</span> 
                    </div> 
                    <IoIosArrowDown size={15}/>
                </div>
                <div className={styles.iconDashboard}>
                    <FaChartSimple size={25} /> 
                </div>
            </div>
           
        </div>
    )
}
