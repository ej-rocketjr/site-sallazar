# 🏢 Site Institucional – Sallazar

Este projeto utiliza **Next.js (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS v4** para desenvolver o site institucional da Sallazar.

O objetivo é manter uma aplicação moderna, performática, escalável e bem organizada, com foco em SEO técnico e boa experiência em dispositivos móveis e desktop.

---

## 🔧 Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js** 18+
- **npm** 9+

Verifique no terminal:
```bash
node -v
npm -v
```

---

## 📥 Como Clonar e Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/ej-rocketjr/site-sallazar.git

# Acesse a pasta
cd site-sallazar

# Instale dependências
npm install

# Ambiente de desenvolvimento
npm run dev
```

A aplicação ficará disponível em: `http://localhost:3000`

---

## 🚀 Scripts Disponíveis

Todos os comandos devem ser executados na raiz do projeto.

| Comando | Quando usar |
| --- | --- |
| `npm run dev` | Desenvolvimento local com recarregamento automático. |
| `npm run build` | Gera build de produção otimizada. |
| `npm run start` | Sobe o build de produção localmente. |
| `npm run lint` | Executa análise de código com **Biome**. |

---

## 🔎 Lint e Qualidade de Código

O projeto usa **Biome** para validação estática de código.

Execute antes de abrir PR:

```bash
npm run lint
```

---

## 📁 Estrutura do Projeto

Este projeto utiliza o **App Router** do Next.js. Estrutura atual:

```text
/
├── public/                              # Arquivos públicos acessados por URL
│
├── src/
│ ├── app/                               # Rotas da aplicação (App Router)
│ │ ├── layout.tsx                       # Layout global (Header, Footer, metadata base)
│ │ ├── page.tsx                         # Home
│ │ ├── globals.css                      # Estilos globais
│ │ ├── robots.ts                        # Configuração de robots
│ │ └── sitemap.ts                       # Geração de sitemap
│ │
│ ├── assets/                            # Assets importados como módulo
│ │ ├── icons/
│ │ ├── images/
│ │ └── logos/
│ │
│ └── components/                        # Componentes reutilizáveis
│   ├── layout/
│   │ ├── Header.tsx                     # Cabeçalho global
│   │ └── Footer.tsx                     # Rodapé global
│   ├── sections/                        # Blocos completos de página
│   │ ├── Hero.tsx                       # Seção hero da Home
│   │ ├── Sobre.tsx                      # Seção sobre a empresa
│   │ ├── SolucoesServicos.tsx           # Seção de soluções e serviços
│   │ ├── Diferenciais.tsx               # Seção de diferenciais
│   │ ├── Depoimentos.tsx                # Seção de depoimentos
│   │ ├── EntreEmContato.tsx             # Seção de contato
│   │ └── Localizacao.tsx                # Seção de localização
│   └── ui/                              # Componentes de apoio reutilizáveis
│
├── next.config.ts                       # Configuração Next.js
├── postcss.config.mjs                   # Configuração PostCSS
├── eslint.config.mjs                    # Configuração de lint no repositório
├── tsconfig.json                        # Configuração TypeScript
├── package.json                         # Dependências e scripts
└── README.md
```

---

## 🧩 Componentização (Next + React)

### Organização

* **`components/layout`** → Estrutura global (Header e Footer).
* **`components/sections`** → Blocos completos de página.
* **`components/ui`** → Componentes de apoio reutilizáveis.

> 💡 Essa separação facilita manutenção, reuso e escalabilidade.

### Como criar uma Section ou Página

**1. Criando uma Section**

Crie o arquivo em `src/components/sections/NomeDaSection.tsx`:

```tsx
// src/components/sections/NomeDaSection.tsx
export default function NomeDaSection() {
  return (
    <section>
      {/* conteúdo da section */}
    </section>
  );
}
```

**2. Criando uma Página**

Crie a pasta e o arquivo `page.tsx` dentro de `src/app/`:

```text
src/app/nome-da-rota/
└── page.tsx
```

Se a página precisar de metadata específico, adicione também um `layout.tsx`:

```tsx
// src/app/nome-da-rota/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Título da Página – Sallazar",
  description: "Descrição da página.",
  alternates: { canonical: "https://sallazar.com.br/nome-da-rota" },
  openGraph: {
    title: "Título da Página – Sallazar",
    description: "Descrição da página.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

### Como importar uma Section em uma Página

```tsx
// src/app/nome-da-rota/page.tsx
import NomeDaSection from "@/components/sections/NomeDaSection";

export default function Page() {
  return (
    <main>
      <NomeDaSection />
    </main>
  );
}
```

---

## 🖼️ Imagens e Performance

### Padrão adotado no projeto

* Importar imagens por módulo (`src/assets`).
* Utilizar imagens raster otimizadas em formato **`.webp`** sempre que possível.
* Renderizar com `next/image`.
* Definir `alt`, `width` e `height`.
* Definir `sizes` para comportamento responsivo.
* Usar `priority` apenas em imagens críticas acima da dobra.
* Usar `loading="lazy"` para imagens secundárias.

### Formato das imagens

Para melhorar compressão, tempo de carregamento e entrega em produção, as imagens do projeto foram padronizadas em **`.webp`** quando aplicável.

Esse formato é preferido para imagens fotográficas e visuais raster porque reduz o tamanho dos arquivos sem perda perceptível relevante na maior parte dos casos.

### Exemplo recomendado

```tsx
import Image from "next/image";
import LogoSallazar from "@/assets/logos/logo-sallazar.svg";

export default function Logo() {
  return (
    <Image
      src={LogoSallazar}
      alt="Logo da Sallazar"
      width={200}
      height={60}
      loading="lazy"
      sizes="(max-width: 1024px) 50vw, 20vw"
    />
  );
}
```

> ⚠️ Nunca use a tag `<img>` diretamente. Sempre utilize o componente `next/image`.

---

## 🔍 SEO Técnico

As páginas utilizam metadata por rota em `src/app` com:

* `title`
* `description`
* `alternates.canonical`
* `openGraph`

Além disso, o projeto inclui:

* `robots.ts`
* `sitemap.ts`

---

## 🌿 Padrão de Branch

As branches devem seguir o formato:

`tipo/descrição-breve`

Tipos comuns:

* `feat` → nova funcionalidade
* `fix` → correção de bug
* `refactor` → refatoração de código existente
* `style` → ajustes visuais ou de formatação
* `docs` → atualização de documentação
* `chore` → tarefas de configuração ou manutenção

Exemplos:

* `feat/hero-home`
* `fix/header-mobile`
* `docs/atualizar-readme`

> 💡 Sempre crie branches a partir da `main` atualizada.

---

## 📏 Padrão de Commit

Utilizamos **Conventional Commits**.

Formato:
`tipo: descrição breve`

Tipos comuns:

* `feat`
* `fix`
* `refactor`
* `style`
* `docs`
* `chore`
* `test`

Exemplos:

* `feat: adicionar seção hero da home`
* `fix: corrigir metadata da página de contato`
* `docs: atualizar estrutura de pastas no README`

📚 Referência: [Padrões de Commits por iuricode](https://github.com/iuricode/padroes-de-commits)

---

## 🔀 Checklist de Pull Request

* [ ] Funcionalidade implementada conforme esperado.
* [ ] Responsividade validada em mobile e desktop.
* [ ] Sem erros no console do navegador.
* [ ] `npm run lint` executado com sucesso.
* [ ] Commits organizados seguindo padrão.
* [ ] Código revisado antes de abrir PR.

---

## 📚 Documentação Oficial

* 📘 [Next.js Docs](https://nextjs.org/docs)
* ⚛️ [React Docs](https://react.dev)
* 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
* 🧪 [Biome Docs](https://biomejs.dev/)
