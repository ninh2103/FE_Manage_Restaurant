"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { getTableLink } from "@/lib/utils";

export default function QRCodetable({
  token,
  tableNumber,
}: {
  token: string;
  tableNumber: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    QRCode.toCanvas(
      canvas,
      getTableLink({
        token,
        tableNumber,
      }),
      function (error) {
        if (error) console.log(error);
        console.log("success");
      }
    );
  }, [token, tableNumber]);
  return <canvas ref={canvasRef} />;
}
