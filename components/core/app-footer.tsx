import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/core/container";
import { Heading } from "@/components/atoms/heading";
import { Button } from "@/components/atoms/button";
import { Hr } from "@/components/atoms/hr";
import { NextIcon } from "@/components/atoms/next-icon";

export function AppFooter () {
  return (
    <footer className="relative bg-tertiary text-white">
      <Container className="flex flex-col gap-4 md:gap-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="space-y-4">
            <Heading level="h2" color="white" size="xs">
              <span className="text-primary">AGENDA</span> OFF ROAD
            </Heading>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="font-medium hover:text-primary">Home</Link>
              </li>
              <li>
                <Link href="#" className="font-medium hover:text-primary">Eventos</Link>
              </li>
              <li>
                <Link href="#" className="font-medium hover:text-primary">Galeria</Link>
              </li>
              <li>
                <Link href="#" className="font-medium hover:text-primary">Contato</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <Heading level="h2" color="white" size="xs">INSTITUCIONAL</Heading>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="font-medium hover:text-primary">Como funciona</Link>
              </li>
              <li>
                <Link href="#" className="font-medium hover:text-primary">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#" className="font-medium hover:text-primary">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <Heading level="h2" color="white" size="xs">CONTATO</Heading>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="flex gap-2 items-center font-medium hover:text-primary">
                  <NextIcon name="mdi:email-outline" />
                  contato@agendaoffroad.com.br
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-2 items-center font-medium hover:text-primary">
                  <NextIcon name="mdi:whatsapp" />
                  (41) 99206-1797 - Comercial
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-2 items-center font-medium hover:text-primary">
                  <NextIcon name="mdi:whatsapp" />
                  (41) 3058-1797 - Suporte
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant={{ color: "primary", type: "outline" }}>PUBLICAR EVENTO</Button>
        </div>
        <Hr />
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-4 items-center">
            <p>Siga-nos:</p>
            <Button variant={{ color: "primary", type: "outline" }} icon={{ name: "mdi:instagram" }} size="xs" />
            <Button variant={{ color: "primary", type: "outline" }} icon={{ name: "mdi:facebook" }} size="xs" />
            <Button variant={{ color: "primary", type: "outline" }} icon={{ name: "mdi:youtube" }} size="xs" />
          </div>
          <p className="text-center">© 2025 Todos os direitos reservados. <Link href="#" className="text-link">Termos de Uso | Política de privacidade</Link></p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="relative w-24 aspect-video">
            <Link href="#" className="absolute w-full h-full">
              <Image 
                className="object-contain" 
                src="/logos/casp-brasil-white.png" 
                alt="Logotipo branco escrito Casp Brasil" 
                sizes="(width: 96px)"
                fill
              />
            </Link>
          </div>
          <div className="relative w-24 aspect-video">
            <Link href="#" className="absolute w-full h-full">
              <Image 
                className="object-contain" 
                src="/logos/agenda-esportiva-white.png" 
                alt="Logotipo branco escrito Casp Brasil"
                sizes="(width: 96px)"
                fill
              />
            </Link>
          </div>
          <div className="relative w-24 aspect-video">
            <Link href="#" className="absolute w-full h-full">
              <Image 
                className="object-contain" 
                src="/logos/agenda-off-road-white.png" 
                alt="Logotipo branco escrito Casp Brasil" 
                sizes="(width: 96px)"
                fill
              />
            </Link>
          </div>
          <div className="relative w-24 aspect-video">
            <Link href="#" className="absolute w-full h-full">
              <Image 
                className="object-contain" 
                src="/logos/agenda-big-ticket-white.png" 
                alt="Logotipo branco escrito Casp Brasil"
                sizes="(width: 96px)"
                fill
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}