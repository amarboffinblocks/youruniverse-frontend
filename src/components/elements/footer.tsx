"use client";

import React from "react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"; // adjust the path based on your setup

const Footer = () => {
  const handleOpenMail = () => {
    window.location.href = "mailto:support@youruniverse.ai";
  };

  return (
    <div className="flex-1 flex flex-col relative">
      <div className="flex-1"></div>

      <div className="flex py-5 justify-center items-center gap-2 text-lg font-semibold text-primary bg-transparent">
        {/* Alert Dialog for Contact */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="text-primary hover:underline">Contact</button>
          </AlertDialogTrigger>
          <AlertDialogContent className="border-primary bg-primary/30">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">Open Gmail?</AlertDialogTitle>
              <AlertDialogDescription>
                Do you want to open Email to contact support?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex justify-end gap-2 mt-4">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleOpenMail}>
                Yes
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>

        <span className="text-primary">-</span>
        <Link href="/attributes" className="text-primary hover:underline">Attribute Page</Link>
      </div>
    </div>
  );
};

export default Footer;
