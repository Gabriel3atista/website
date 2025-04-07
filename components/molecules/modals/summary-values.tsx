"use client";

import { Dialog } from "radix-ui";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ModalContent } from "@/components/atoms/modal-content";
import { Heading } from "@/components/atoms/heading";
import { Button } from "@/components/atoms/button";
import { Table } from "@/components/atoms/table";

export function SummaryValues() {
  const [showSummaryDetail, setShowSummaryDetail] = useState(false);
  
  return (
    <Dialog.Content aria-describedby={undefined}>
      <motion.div
        initial={false}
        animate={{
          height: showSummaryDetail ? "h-min" : "auto",
        }}
        className="overflow-hidden"
      >
        <ModalContent 
          title="Resumo de Valores" 
          className="max-h-[calc(100dvh-80px)] h-full"
        >
          <div className="flex flex-col pl-4 pr-2 pb-4 mr-2 h-full overflow-y-auto">
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-col gap-12 w-full bg-secondary rounded-xl p-4">
                <div className="flex flex-col gap-1">
                  <p className="text-white/50">A receber</p>
                  <Heading level="h2" color="white">R$ 5.000,00</Heading>
                </div>
                <Button 
                  className="self-start" 
                  variant={{ color: "white", type: "solid" }} 
                  icon={{ name: "mdi:arrow-top-right", position: "right" }}
                >
                  Solicitar Retirada
                </Button>
              </div>
              <div className="flex gap-4 w-full md:w-[528px]">
                <div className="flex-1 w-full bg-gray-300">
                  {showSummaryDetail ? "true" : "false"}
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-2 bg-white border border-solid border-gray-300 p-2 rounded-md">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <p className="text-xs">Total Pago</p>
                    </div>
                    <p className="text-black font-semibold">R$ 60.000,00</p>
                  </div>
                  <div className="flex flex-col gap-2 bg-white border border-solid border-gray-300 p-2 rounded-md">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <p className="text-xs">Taxa de adm</p>
                    </div>
                    <p className="text-black font-semibold">R$ 2.000,00</p>
                  </div>
                  <div className="flex flex-col gap-2 bg-white border border-solid border-gray-300 p-2 rounded-md">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      <p className="text-xs">Aguardando / Vencido</p>
                    </div>
                    <p className="text-black font-semibold">R$ 500,00</p>
                  </div>
                </div>
              </div>
              <Button
                variant={{ color: "secondary", type: "text" }} 
                icon={{ name: "mdi:keyboard-arrow-down", position: "right" }} 
                onClick={() => setShowSummaryDetail(!showSummaryDetail)}
              >
                {showSummaryDetail ? "Ocultar" : "Mostrar"} Resumo Detalhado
              </Button>
            </div>
            <AnimatePresence>
              {showSummaryDetail && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="flex flex-col gap-4">
                    <p className="text-xs uppercase">Resumo Detalhado</p>
                    <Table />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ModalContent>
      </motion.div>
    </Dialog.Content>
  );
}