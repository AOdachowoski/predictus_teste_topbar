"use client";

import { useState } from "react";
import styles from "./topbar.module.scss";
import Dropdown from "../Dropdown/dropdown";
import Image from "next/image";
import DropdownUser from "../DropdownUser/dropdownUser";
import { items, subItems, itemsUser } from "./topbarMock";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const username = "Carla Souza";

  const [pageSelected, setPageSelected] = useState(items[0]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) setUserOpen(false);
  };

  const toggleUserMenu = () => {
    setUserOpen(!userOpen);
    if (!userOpen) setMenuOpen(false);
  };

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbar}>
        <div className={styles.menuSection}>
          <div onClick={toggleMenu} className={styles.menuButton}>
            <Image src="/menu.svg" alt="menu" width={26} height={26} priority />
          </div>
          {menuOpen && (
            <Dropdown
              items={items}
              subItems={subItems}
              setPageSelected={setPageSelected}
              pageSelected={pageSelected}
            />
          )}
          <div className={styles.textPageContainer}>
            <Image
              src={pageSelected.icon}
              alt="Ícone da página selecionada"
              width={32}
              height={32}
            />
            <span className={styles.textPage}>{pageSelected.text}</span>
          </div>
        </div>

        <div className={styles.logoContainer}>
          <Image src="/logo.svg" alt="Logo Predictus" width={204} height={40} />
        </div>

        <div className={styles.userSection}>
          <Image
            src="/icon_notificacao.svg"
            alt="Ícone notificação"
            width={24}
            height={24}
            className={styles.notificationButton}
          />
          <div className={styles.userInfo} onClick={toggleUserMenu}>
            <Image
              src="/user_photo.svg"
              alt="Usuário"
              width={48}
              height={48}
              className={styles.userImage}
            />
            <span className={styles.userName}>{username}</span>
            <Image
              src="/arrow.svg"
              alt="Ícone para abrir sessão usuário desktop"
              width={16}
              height={16}
              className={styles.arrow}
              style={{ rotate: userOpen ? "180deg" : "" }}
            />
            <Image
              src="/icon_user_mobile.svg"
              alt="Ícone para abrir sessão usuário mobile"
              width={16}
              height={16}
              className={styles.iconMobile}
              style={{ rotate: userOpen ? "180deg" : "" }}
            />
          </div>
          {userOpen && <DropdownUser items={itemsUser} width={200} />}
        </div>
      </div>
    </div>
  );
}
