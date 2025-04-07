import { type DropdownOptions } from "@/components/atoms/dropdown";

import { Content } from "@/components/core/content";
import { DropdownModal } from "@/components/atoms/dropdown";
import { Button } from "@/components/atoms/button";
import { Heading } from "@/components/atoms/heading";
import { ProgressBar } from "@/components/atoms/progress-bar";
import { NextIcon } from "@/components/atoms/next-icon";
import { Modal } from "@/components/atoms/modal";

import { ModalSubscribers } from "@/components/molecules/modals/subscribes";
import { ModalTopSubscribers } from "@/components/molecules/modals/top-subscribers";
import { SummaryValues } from "@/components/molecules/modals/summary-values";

const dropdownOptions: DropdownOptions[] = [
  {
    label: "Inscrições",
    beforeLabel: <NextIcon name="mdi:barcode" />,
    modal: <ModalSubscribers />
  },
  {
    label: "Top Inscritos",
    beforeLabel: <NextIcon name="mdi:bar-chart" />,
    modal: <ModalTopSubscribers />
  },
  {
    label: "Comparar Vendas",
    beforeLabel: <NextIcon name="mdi:graph-line" />
  },
  {
    label: "Notificar",
    beforeLabel: <NextIcon name="mdi:bell" />
  },
  {
    label: "Linha do Tempo",
    beforeLabel: <NextIcon name="mdi:timeline-clock" />
  },
  {
    label: "Check-in",
    beforeLabel: <NextIcon name="mdi:checkbox-marked-circle" />
  },
  {
    label: "Gerar Leads",
    beforeLabel: <NextIcon name="mdi:format-list-bulleted" />
  },
  {
    label: "Vendedores",
    beforeLabel: <NextIcon name="mdi:users-group" />
  },
  {
    label: "Vendas Upsell",
    beforeLabel: <NextIcon name="mdi:money" />
  },
  {
    label: "Arq. Capitalizadora",
    beforeLabel: <NextIcon name="mdi:note-text" />
  },
  {
    label: "Números Premiados",
    beforeLabel: <NextIcon name="mdi:ticket" />
  },
  {
    label: "Gerenciar Etapa",
    beforeLabel: <NextIcon name="mdi:settings" />,
    afterLabel: <NextIcon name="mdi:keyboard-arrow-right" />,
    as: "sub",
    subOptions: [
      {
        label: "Alterar Etapa",
        beforeLabel: <NextIcon name="mdi:note-edit" />,
      },
      {
        label: "Replicar Etapa",
        beforeLabel: <NextIcon name="mdi:content-copy" />,
      },
      {
        label: "Visualizar Etapa",
        beforeLabel: <NextIcon name="mdi:eye" />,
      },
      {
        label: "Mover Etapa",
        beforeLabel: <NextIcon name="mdi:arrow-down-right" />,
      },
      {
        label: "Excluir Etapa",
        beforeLabel: <NextIcon name="mdi:delete" />,
        variant: {
          color: "danger",
          type: "ghost"
        },
      },
    ]
  },
];

export function CardManager () {
  return (
    <Content className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex justify-center items-center w-full aspect-[16/6] bg-gray-300 rounded-md">
            Imagem aqui
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4">
            <Heading level="h2" size="xs">
                BMW GS 900 Adventure 2025 0km ou HUSQ 300 2024 0km ou 70 Mil
            </Heading>
            <Button
              className="flex-none"
              variant={{ color: "secondary", type: "outline" }}
              icon={{ name: "material-symbols:refresh-rounded" }}
              hideChildren="sm"
              size="sm"
            >
                Atualizar
            </Button>
          </div>
          <ProgressBar />
          <div className="flex gap-4">
            <Modal content={<SummaryValues />}>
              <Button 
                className="flex-1"
                icon={{ name: "mdi:cash-multiple" }}
                variant={{ color: "secondary", type: "outline" }}
              >
                    R$ 5.000
              </Button>
            </Modal>
            <DropdownModal
              options={dropdownOptions}
            >
              <Button 
                className="flex-1"
                icon={{ name: "mdi:playlist-edit" }}
              >
                  Opções
              </Button>
            </DropdownModal>
          </div>
        </div>
      </div>
    </Content>
  );
}