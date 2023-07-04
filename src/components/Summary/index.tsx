import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}

export default Summary;
