"use client";

import { motion } from "framer-motion";
import { AiOutlineGoogle } from "react-icons/ai";

import { signInWithGoogle } from "../lib/firebase";

export default function SignUp() {
    return (
        <>
            <motion.button 
                className="bg-secondary hover:opacity-50 hover:text-text p-4 gap-4 shadow-md flex border rounded-md text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={signInWithGoogle}
            >
                <AiOutlineGoogle size={24} />
                <span className="">Login with Google</span>
            </motion.button>
        </>
    );
}