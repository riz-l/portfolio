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
  SkillsSection,
  SkillsCard,
  SkillsHeader,
  SkillsDescription,
} from "./Skills.elements";

// Component: Skills
function Skills({ isPrimaryBackground }) {
  return (
    <SkillsContainer isPrimaryBackground={isPrimaryBackground}>
      <Container>
        <Wrapper>
          <SkillsWrapper>
            <SkillsSection>
              {/* Other */}
              <SkillsCard>
                <SkillsHeader>
                  <EventNoteIcon />
                  <h4>Other</h4>
                  <p>
                    Alongside my development work, I use project management and
                    design/prototyping softwares to ensure that I can deliver
                    within tight deadlines.
                  </p>
                </SkillsHeader>

                <SkillsDescription>
                  <h5>Tools Used</h5>
                  <p>Jira, Microsoft Teams, Trello, Azure DevOps, Figma</p>
                </SkillsDescription>
              </SkillsCard>

              {/* Developer */}
              <SkillsCard>
                <SkillsHeader>
                  <CodeIcon />
                  <h4>Developer</h4>
                  <p>
                    I'm currently working as a Front-end developer for DXC
                    Technology, primarily working in website application
                    development.
                  </p>
                </SkillsHeader>

                <SkillsDescription>
                  <h5>Frequently Used</h5>
                  <p>
                    HTML, CSS, Sass, JavaScript, React JS, XAML, Firebase, Azure
                  </p>
                </SkillsDescription>

                <SkillsDescription>
                  <h5>Tools Used</h5>
                  <p>VS Code, Visual Studio, GitKraken, GitHub, Code Sandbox</p>
                </SkillsDescription>
              </SkillsCard>

              {/* Personal */}
              <SkillsCard>
                <SkillsHeader>
                  <PortraitIcon />
                  <h4>Personal</h4>
                  <p>
                    As an active member of Team Defence Information's Vanguard
                    initiative, I contribute towards improving the wider UK
                    Defence industry.
                  </p>
                </SkillsHeader>

                <SkillsDescription>
                  <h5>Current Projects</h5>
                  <p>
                    The 'Acronym Search' application used by newcomers to the UK
                    Defence industry
                  </p>
                </SkillsDescription>
              </SkillsCard>
            </SkillsSection>
          </SkillsWrapper>
        </Wrapper>
      </Container>
    </SkillsContainer>
  );
}

// Export: Skills
export default Skills;
