// Import: Dependencies
import styled from "styled-components";

// Styled: SkillsContainer
export const SkillsContainer = styled.div`
  background: ${({ isPrimaryBackground, theme }) =>
    isPrimaryBackground
      ? `${theme.colors.global.backgroundPrimary}`
      : `${theme.colors.global.backgroundSecondary}`};
  height: 100%;
  width: 100%;
`;

// Styled: SkillsWrapper
export const SkillsWrapper = styled.div`
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.global.highlightPrimary};
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Styled: SkillsTable
export const SkillsTable = styled.table``;

// Styled: SkillsTableRow
export const SkillsTableRow = styled.tr``;

// Styled: SkillsTableHeading
export const SkillsTableHeading = styled.th``;

// Styled: SkillsTableData
export const SkillsTableData = styled.td``;
