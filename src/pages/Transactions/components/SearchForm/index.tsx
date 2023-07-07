import { MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { SearchFormContainer } from "./styles";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

/**
 * Why does a component render?
 * - Hooks changed (changed state, context, reducer);
 * - Props changed (changed props);
 * - Parent rendered;
 *
 * What is the rendering flow?
 * 1. React recreates the HTML of that component's interface;
 * 2. Compare the recreated HTML version with the previous version;
 * 3. IF changed something, it writes the HTML on the screen;
 *
 * Memo:
 * 0. Hooks changed, Props changed (deep comparison);
 * 0.1. Compare the previous version of hooks and props;
 * 0.2. IF changed something, it will allow re-rendering;
 *
 */

export function SearchForm() {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
