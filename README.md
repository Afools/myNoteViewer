# 开发日志

## 2024/3/1

完成了 react-bootstrap 中 Navbar 系列的基础学习，完成 [Navbar.js](./src/components/Navbar.js) 组件的基础编写。

开始编写 [Home.js](./src/components/Home.js)，学习 bootstrap 的网格式布局。

### bootstrap 网格布局

使用 bootstrap 前要在 APP.js 或 index.js 中添加以下代码

```js
> import "bootstrap/dist/css/bootstrap.min.css";
```

网格布局通过 Container,Row,Col 三种组件进行布局。Container 中只能包含 Row，Row 中只能包含 Col。每一个 Row 将屏幕分割为 12 块，通过布局设计决定每一个 Col 能占据多少块。
可以通过添加**_xs,sm,md,lg,xl,xxl_**几种预设计来对不同尺寸的屏幕分别设计布局。

常用 API 如下

```js
    <Col md={{order:1}}/> # order 来决定组件的相对顺序，没有设定order的组件按html中的编辑顺序进行渲染
    <Col md={{span:3,offset:3}}/> # span 决定组件的宽 offset 决定组件的偏置 此组件表示组件左边空置3块，组件本身占用3块
```

---

### bootstrap Navbar

Navbar 需要`import {Navbar,Nav,Dropdown} from react-bootstrap`。以下是一个包括搜索栏和下拉式导航的基础导航栏。

```html
<Navbar fixed="top" expand="md" className="navbar">
  <Container fluid>
    <Navbar.Brand>LJ</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <nav className="me-auto flex-row" navbarScroll>
        <Nav.Link as="{Link}" to="/">Home</Nav.Link>
        <NavDropdown title="Entertainment" id="responsive-navbar-dropdown">
          <NavDropdown.Item to="/Anime">Anime</NavDropdown.Item>
          <NavDropdown.Item to="/Comic_and_Novel">Novel</NavDropdown.Item>
        </NavDropdown>
      </nav>
      <form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <button variant="outline-success">Search</button>
      </form>
    </Navbar.Collapse>
  </Container>
</Navbar>
```

## 2024/3/4

开始进行 AI 板块的编程，准备使用 Card 组件进行项目编排。

```jsx
<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src="./cancer_detection.png" />{" "}
  /*路径相对于public文件而不是src文件*/
  <CardBody>
    <Card.Title>癌栓检测</Card.Title>
    <Card.Body>
      该项目使用retinaNet对病理切片进行检测，mAP@0.5达到80.3%
    </Card.Body>
    <Card.Link href="****">Github</Card.Link>
  </CardBody>
</Card>
```
