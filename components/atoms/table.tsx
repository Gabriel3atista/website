import clsx from "clsx";

interface TableProps {
  title?: string;
  caption?: {
    title: string;
    description: string;
  };
}

function TableHeader({ title }: Pick<TableProps, "title">) {
  if (!title) return null;

  return (
    <div className="w-full bg-secondary-10 border border-secondary-20 text-secondary font-semibold px-4 py-2 rounded-tl-xl rounded-tr-xl">
      {title}
    </div>
  );
}

function TableCaption({ caption }: Pick<TableProps, "caption">) {
  if (!caption) return null;

  return (
    <caption className="pt-2 pb-4 px-4 text-base font-semibold text-left rtl:text-right text-dark">
      {caption.title}
      <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
        {caption.description}
      </p>
    </caption>
  );
}

export function Table({ title, caption, ...props }: TableProps) {
  return (
    <div className="flex flex-col" {...props}>
      {
        title && <TableHeader title={title} />
      }
      <div className={clsx(
        "relative border-neutral-300 bg-white p-2",
        title ? "rounded-bl-xl rounded-br-xl border-x border-b" : "border rounded-xl"
      )}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          {
            caption && <TableCaption caption={caption} />
          }
          <thead className="text-xs text-dark uppercase bg-neutral-200">
            <tr>
              <th scope="col" className="rounded-l-lg px-6 py-3 uppercase">
                Situação
              </th>
              <th scope="col" className="px-6 py-3 uppercase">
                Valor
              </th>
              <th scope="col" className="rounded-r-lg px-6 py-3 uppercase">
                Qtd
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-neutral-100 transition-all duration-150">
              <th scope="row" className="rounded-l-lg px-6 py-4 font-medium text-dark whitespace-nowrap">
                Aguardando Pgto
              </th>
              <td className="px-6 py-4">
                R$ 600,00
              </td>
              <td className="rounded-r-lg px-6 py-4">
                4
              </td>
            </tr>
            <tr className="bg-white hover:bg-neutral-100 transition-all duration-150">
              <th scope="row" className="rounded-l-lg px-6 py-4 font-medium text-dark whitespace-nowrap">
                Aguardando Pgto
              </th>
              <td className="px-6 py-4">
                R$ 600,00
              </td>
              <td className="rounded-r-lg px-6 py-4">
                4
              </td>
            </tr>
            <tr className="bg-white hover:bg-neutral-100 transition-all duration-150">
              <th scope="row" className="rounded-l-lg px-6 py-4 font-medium text-dark whitespace-nowrap">
                Aguardando Pgto
              </th>
              <td className="px-6 py-4">
                R$ 600,00
              </td>
              <td className="rounded-r-lg px-6 py-4">
                4
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}