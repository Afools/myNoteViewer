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
可以通过添加*xs,sm,md,lg,xl,xxl*几种预设计来对不同尺寸的屏幕分别设计布局。

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

## 2024/3/25

申请了一个 github token 用作建立图床`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`
尝试失败，无论`https://github.com/user/repository/raw/main/path/img.png`还是`https://raw.githubusercontainer.com/user/repository/path/img.png`都无法显示图片。

插入图片本地可见但实际网页中无法加载。

1. 测试使用公开图床，成功显示图片。
2. ![png](https://raw.githubusercontent.com/Afools/pictureRepo/main/cancer_detection.png)  
   使用 github 充当图床，新建的 repository 且图片放在根目录，成功显示图片。

经验证，在实际网页中，方法 2 成功显示图片

## 2024/3/25

进行下一步开发计划

1. 增加项目卡片
2. 增加项目日志和学习笔记，学习网页插入 markdown 页面方法
3. 增加 ACG 页面卡片
4. 学习其他 CSS 渲染，增加页面美观度

## 2024/3/27

加入一些 css 动画效果

### 数标移动到卡片时卡片上浮

```css
.item-card {
  width: 18rem;
  height: 28rem;
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
}

.item-card:hover {
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
  -moz-transform: translate(-2px, -2px);
  -webkit-transform: translate(-2px, -2px);
  -o-transform: translate(-2px, -2px);
  -ms-transform: translate(-2px, -2px);
  transform: translate(-2px, -2px);
  -webkit-box-shadow: 5px 5px 15px rgba(67, 72, 84, 0.5);
  -moz-box-shadow: 5px 5px 15px rgba(67, 72, 84, 0.5);
  -o-box-shadow: 5px 5px 15px rgba(67, 72, 84, 0.5);
  box-shadow: 5px 5px 15px rgba(67, 72, 84, 0.5);
}
```

TODO:计划建立自用的 CSS 动画效果库  
尝试修改字体，在 CSS 中用.APP 选择器声名`font-family`，可声名一个优先级从高到低的字体列表。
TODO 在添加日志功能后，完善搜索功能  
通过在 css 中添加`user-select:none`可以使文本内容不能被选中。

## 2024/3/28

经过一系列学习，发现在纯前端环境下很难做到读取本地文本文件并渲染。决定转换方向如下：  
将笔记上传到 Github 中并在个人网站中只提供目录链接和关键词。

今天增加了 Note 页的手风琴侧边栏。使用 bootstrap 的 Accordion 组件。代码如下

```js
<Accordion>
  <Nav className="flex-column">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Front</Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Nav.Link>React</Nav.Link>
      </Accordion.Collapse>
      <Accordion.Collapse eventKey="0">
        <Nav.Link>Bootstrap</Nav.Link>
      </Accordion.Collapse>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Back End</Accordion.Header>
      <Accordion.Collapse eventKey="1">
        <Nav.Link>Spring</Nav.Link>
      </Accordion.Collapse>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Nav.Link to="/myTestSite/Note-otherproject">Other</Nav.Link>
    </Accordion.Item>
  </Nav>
</Accordion>
```

通过将 Accordion 和 Nav 组件结合得到的侧边栏导航。
使用 ListGroup 组件构建目录列表。通过 onClick 实现跳转，通过添加`style={{cursor:"pointer"}}`改变鼠标指针状态
