export const defaultCode = `
class Demo extends React.Component {
  render() {
    const MenuIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" id="Layer_1"  version="1.1" viewBox="0 0 32 32" width="50px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
    );
    return (
      <div>
        { /* Preview Block-1 */ }
        <PreviewBlock header="Styled Buttons">
          <PreviewElements>
            <Button>Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="success">Success</Button>
            <Button type="danger">Danger</Button>
            <Button type="warning">Warning</Button>
            <Button type="info">Info</Button>
            <Button type="dark">Dark</Button>
          </PreviewElements>
        </PreviewBlock>
        { /* Preview Block-2 */ }
        <PreviewBlock header="Bordered Buttons">
          <PreviewElements>
            <Button bordered>Primary</Button>
            <Button type="secondary" bordered>Secondary</Button>
            <Button type="success" bordered>Success</Button>
          </PreviewElements>
        </PreviewBlock>
        { /* Preview Block-3 */ }
        <PreviewBlock header="Borderless Buttons">
          <PreviewElements>
            <Button type="danger" borderless>Danger</Button>
            <Button type="warning" borderless>Warning</Button>
            <Button type="info" borderless>Info</Button>
          </PreviewElements>
        </PreviewBlock>
        { /* Preview Block-4 */ }
        <PreviewBlock header="Flat Buttons">
          <PreviewElements>
            <Button type="success" flat>Success</Button>
            <Button type="danger" flat>Danger</Button>
            <Button type="warning" flat>Warning</Button>
          </PreviewElements>
        </PreviewBlock>
        { /* Preview Block-5 */ }
        <PreviewBlock header="Sizable Buttons">
          <PreviewElements>
            <Button size="small">
              Small
            </Button>
            <Button size="medium">
              Medium
            </Button>
            <Button size="large">
              Large
            </Button>
          </PreviewElements>
        </PreviewBlock>
        { /* Preview Block-5 */ }
        <PreviewBlock header="Buttons with icons and text">
          <PreviewElements>
            <Button type="warning" icon="icon-left">
              icon left
            </Button>
            <Button type="success" icon="icon-right" iconAlignment="right">
              icon right
            </Button>
          </PreviewElements>
        </PreviewBlock>
        <PreviewBlock header="Icon only button">
            <Button iconButton icon={<MenuIcon />} />
        </PreviewBlock>
      </div>
    );
  }
}
`;
