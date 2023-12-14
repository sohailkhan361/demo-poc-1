"use client";
import React from "react";
import styles from "./styles.module.css";

interface HeaderProps {
    headerText?: string;
}

function Header({ headerText = 'Header' }: HeaderProps) {
    return (
        <div className={styles.Header}>
            <h1>{headerText}</h1>
        </div>
    );
}

export default Header;