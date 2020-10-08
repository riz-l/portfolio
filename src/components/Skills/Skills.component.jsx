// Import: Dependencies
import React from "react";
import { Container, Wrapper } from "../../globalComponents";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CodeIcon from "@material-ui/icons/Code";
import PortraitIcon from "@material-ui/icons/Portrait";

// Import: Styled Components
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsTable,
  SkillsTableRow,
  SkillsTableHeading,
  SkillsIcon,
  SkillsTableData,
} from "./Skills.elements";

// Component: Skills
function Skills({ isPrimaryBackground }) {
  return (
    <SkillsContainer isPrimaryBackground={isPrimaryBackground}>
      <Container>
        <Wrapper>
          <SkillsWrapper>
            <SkillsTable>
              <SkillsTableRow>
                <SkillsTableHeading>
                  <SkillsIcon></SkillsIcon>
                </SkillsTableHeading>
                <SkillsTableHeading>
                  <SkillsIcon></SkillsIcon>
                </SkillsTableHeading>
                <SkillsTableHeading>
                  <SkillsIcon></SkillsIcon>
                </SkillsTableHeading>
              </SkillsTableRow>

              <SkillsTableRow>
                <SkillsTableHeading>Other</SkillsTableHeading>
                <SkillsTableHeading>Developer</SkillsTableHeading>
                <SkillsTableHeading>Personal</SkillsTableHeading>
              </SkillsTableRow>

              <SkillsTableRow>
                <SkillsTableData>
                  Alongside my development work, I use project management and
                  design/prototyping softwares allowing me to work within tight
                  deadlines.
                </SkillsTableData>
                <SkillsTableData>
                  I'm currently working as a Front-end developer. As well as
                  keeping my code neat, I like to follow agile methodologies.
                </SkillsTableData>
                <SkillsTableData>
                  Outside of work, I'm an active member of Team Defence
                  Information's Vanguard initiative, where I contribute towards
                  improving the wider UK Defence industry.
                </SkillsTableData>
              </SkillsTableRow>

              <SkillsTableRow>
                <SkillsTableHeading></SkillsTableHeading>
                <SkillsTableHeading>Languages Used</SkillsTableHeading>
                <SkillsTableHeading></SkillsTableHeading>
              </SkillsTableRow>

              <SkillsTableRow>
                <SkillsTableData></SkillsTableData>
                <SkillsTableData>
                  HTML, CSS, Sass, JavaScript, React JS, XAML
                </SkillsTableData>
                <SkillsTableData></SkillsTableData>
              </SkillsTableRow>

              <SkillsTableRow>
                <SkillsTableHeading>Tools Used</SkillsTableHeading>
                <SkillsTableHeading>Tools Used</SkillsTableHeading>
                <SkillsTableHeading>Tools Used</SkillsTableHeading>
              </SkillsTableRow>

              <SkillsTableRow>
                <SkillsTableData>
                  Jira, Microsoft Teams, Trello, Azure DevOps, Figma
                </SkillsTableData>
                <SkillsTableData>
                  VS Code, Visual Studio, GitKraken, GitHub, Codepen
                </SkillsTableData>
                <SkillsTableData>
                  The 'Acronym Search' application used by newcomers to the UK
                  Defence industry
                </SkillsTableData>
              </SkillsTableRow>
            </SkillsTable>
          </SkillsWrapper>
        </Wrapper>
      </Container>
    </SkillsContainer>
  );
}

// Export: Skills
export default Skills;
