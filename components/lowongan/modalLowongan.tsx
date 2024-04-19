'use client'
import { motion } from "framer-motion";
import { useState } from "react";

type dataProps = {
    id: number;
    title: string;
    desc: string;
    category: string;
    location: string;
    created_at: Date;
    update_at: Date;
}
export default function ModalLowongan(data: dataProps) {
    return (
        <>
            <div className="w-dvw h-dvh bg-black">Test Modal</div>
        </>
    )
}