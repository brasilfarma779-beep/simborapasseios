
import React from 'react';
import { Anchor, Users, Heart, Crown, Waves, ShieldCheck, Star, Camera, Clock, UserCheck } from 'lucide-react';
import { Destination, Experience, Testimonial, FAQItem } from './types.ts';

export const WHATSAPP_LINK = "https://wa.me/5512991810650";
export const INSTAGRAM_LINK = "https://instagram.com/simborapasseiobarco";

export const DESTINATIONS: Destination[] = [
  {
    id: 'curral',
    name: 'Praia do Curral',
    description: 'A mais badalada de Ilhabela, com águas calmas e excelente infraestrutura de lazer.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'feiticeira',
    name: 'Praia da Feiticeira',
    description: 'Um refúgio tranquilo com casarões históricos e mar cristalino ideal para mergulho relaxante.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'praia-grande',
    name: 'Praia Grande',
    description: 'Extensa faixa de areia dourada com águas claras, perfeita para relaxar com toda a família.',
    image: 'https://images.unsplash.com/photo-1520942702018-0862200e6873?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ilha-das-cabras',
    name: 'Ilha das Cabras',
    description: 'Santuário ecológico submarino. O ponto mais famoso para snorkeling e observação de peixes.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'castelhanos',
    name: 'Praia de Castelhanos',
    description: 'A joia selvagem de Ilhabela. Paisagem rústica com formato de coração e águas intensas.',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'eustaquio',
    name: 'Saco do Eustáquio',
    description: 'Acesso exclusivo por mar. Águas que parecem uma piscina natural de tão calmas e transparentes.',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'fome',
    name: 'Praia da Fome',
    description: 'Pequena, charmosa e isolada. O cenário perfeito para quem busca paz e contato com a natureza.',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'jabaquara',
    name: 'Praia do Jabaquara',
    description: 'Cercada por montanhas imponentes, é uma das baías mais preservadas e cênicas da ilha.',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'sino',
    name: 'Praia do Sino',
    description: 'Famosa pelas pedras que emitem sons metálicos. Mar raso, calmo e repleto de coqueiros.',
    image: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'azeda',
    name: 'Praia da Azeda',
    description: 'Um paraíso de águas mornas e transparentes, ideal para fotos subaquáticas inesquecíveis.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1200'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'familia',
    title: 'Passeio Família',
    description: 'Segurança total e diversão para todas as idades, com paradas em águas rasas e calmas.',
    icon: 'Users'
  },
  {
    id: 'amigos',
    title: 'Passeio para Amigos',
    description: 'Muita música, diversão e roteiros dinâmicos pelas praias mais badaladas da ilha.',
    icon: 'Waves'
  },
  {
    id: 'romantico',
    title: 'Passeio Romântico',
    description: 'Privacidade e cenários de tirar o fôlego para momentos inesquecíveis a dois.',
    icon: 'Heart'
  },
  {
    id: 'luxo',
    title: 'Privativo Luxo',
    description: 'O ápice da exclusividade com atendimento premium, conforto total e roteiro flexível.',
    icon: 'Crown'
  },
  {
    id: 'mergulho',
    title: 'Paradas de Mergulho',
    description: 'Equipamentos de snorkel inclusos para você explorar a rica vida marinha de Ilhabela.',
    icon: 'Anchor'
  }
];

export const DIFFERENTIALS = [
  { icon: <UserCheck className="w-8 h-8 text-gold" />, title: 'Capitão Experiente', desc: 'Navegação segura com quem conhece cada detalhe do Litoral Norte.' },
  { icon: <ShieldCheck className="w-8 h-8 text-gold" />, title: 'Embarcação Segura', desc: 'Manutenção rigorosa e todos os itens de salvatagem exigidos.' },
  { icon: <Star className="w-8 h-8 text-gold" />, title: 'Atendimento Personalizado', desc: 'Cuidamos de cada detalhe para que sua única preocupação seja relaxar.' },
  { icon: <Clock className="w-8 h-8 text-gold" />, title: 'Paradas Estratégicas', desc: 'Tempo otimizado em cada destino para você aproveitar o melhor de cada lugar.' },
  { icon: <Camera className="w-8 h-8 text-gold" />, title: 'Fotos Incríveis', desc: 'Cenários paradisíacos que vão render as melhores fotos da sua viagem.' },
  { icon: <Anchor className="w-8 h-8 text-gold" />, title: 'Experiência Memorável', desc: 'Não é apenas um passeio, é a criação de memórias preciosas.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    text: 'O melhor passeio que já fiz! O capitão foi extremamente atencioso e o roteiro pelas praias é simplesmente impecável.',
    rating: 5,
    location: 'São Paulo, SP'
  },
  {
    id: '2',
    name: 'Ricardo Oliveira',
    text: 'Segurança nota mil. Levei minha família e me senti muito tranquilo. O barco é excelente e as praias são lindas.',
    rating: 5,
    location: 'Campinas, SP'
  },
  {
    id: '3',
    name: 'Carla e João',
    text: 'Fizemos o passeio privativo e foi a melhor escolha. Privacidade total e um pôr do sol que nunca vamos esquecer.',
    rating: 5,
    location: 'SJC, SP'
  },
  {
    id: '4',
    name: 'Bruno Mendes',
    text: 'Atendimento premium de verdade. Do agendamento até o desembarque, tudo perfeito e muito profissional.',
    rating: 5,
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: '5',
    name: 'Fernanda Lima',
    text: 'As paradas de mergulho são fantásticas. Vi muitos peixes e tartarugas na Ilha das Cabras. Recomendo demais!',
    rating: 5,
    location: 'Curitiba, PR'
  }
];

export const FAQ: FAQItem[] = [
  {
    question: "De onde partem os passeios?",
    answer: "Nossas saídas ocorrem em Caraguatatuba, em local de fácil acesso com estacionamento seguro para sua conveniência."
  },
  {
    question: "O que devo levar para o barco?",
    answer: "Recomendamos protetor solar, toalhas, chapéu, óculos de sol e, claro, sua câmera para registrar os melhores momentos."
  },
  {
    question: "O cooler com gelo está incluso?",
    answer: "Sim! Disponibilizamos cooler com gelo e água mineral cortesia para manter suas bebidas sempre geladas durante o trajeto."
  },
  {
    question: "E se o tempo não estiver bom?",
    answer: "Monitoramos as condições marítimas constantemente. Se não houver segurança para navegar, reagendamos seu passeio sem custos."
  }
];
