# Development Diary

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

申请了一个 github token 用作建立图床
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
TODO 在添加日志功能后，完善搜索功能 搜索功能可能需要后端支持，视进度决定是否完成。
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

## 2024/3/29

将昨天完成的 Accordion 组件化，通过 items 变量直接进行编辑

```js
function SideNavSubItem(props) {
  return (
    <Accordion.Collapse eventKey={props.eventKey}>
      <Nav.Link>{props.title}</Nav.Link>
    </Accordion.Collapse>
  );
}

function SideNavItem(props) {
  if (!props.subItems || props.subItems.length === 0) {
    return (
      <Accordion.Item eventKey={props.eventKey}>
        <Nav.Link flush>{props.title}</Nav.Link>
      </Accordion.Item>
    );
  }
  return (
    <Accordion.Item eventKey={props.eventKey}>
      <Accordion.Header>{props.title}</Accordion.Header>
      {props.subItems.map((subItem, index) => (
        <SideNavSubItem key={index} {...subItem} />
      ))}
    </Accordion.Item>
  );
}

export default function SideNav(props) {
  const items = [
    {
      title: "Front",
      eventKey: "0",
      subItems: [
        { title: "React", eventKey: "0" },
        { title: "Bootstrap", eventKey: "0" },
      ],
    },
    {
      title: "Back End",
      eventKey: "1",
      subItems: [{ title: "Spring", eventKey: "1" }],
    },
    {
      title: "Other",
      eventKey: "2",
      subItems: [],
    },
  ];
  const sideNavHtml = (
    <Accordion>
      <Nav className="flex-column">
        {items.map((item, index) => (
          <SideNavItem key={index} {...item} />
        ))}
      </Nav>
    </Accordion>
  );
  return sideNavHtml;
}
```

## 2024/8/9

初步完成了 md 文件的导入和渲染。
通过 fetch 来进行导入，url 为相对**public**文件夹的相对地址，而不是相对代码文件位置。使用 react-markdown 进行初步渲染，后续可以尝试增加渲染风格。

遇到新的问题：

- footer 组件无法置于页面底部，会挡住渲染出的 markdown 内容。
- 还需要增加通过 navbar 进行 note 选择的功能。

## 2024/8/10

准备通过 css 样式修改，解决组件重叠等问题。

通过排查，将 Navbar 的 flex='top'删除，mian-contianer 组件顺利按预期生成。将 Note 的 hight 样式删除，footer 自动位于最下方。
遇到了与上传图片相同的问题，本地的笔记无法在 GitHub page 中获得，尝试通过 GitHub 链接进行抓取，但是需要 token，且临时 token 具有时效性。

尝试生成 token：'\*\*\*' 失败，
尝试将 note 上传至公开图床库进行尝试 **成功显示**。

## 2024/8/11

实现了 note 的显示和标签切换，通过 json 存储 note 信息和地址，在 notelist 中渲染所有 notes 列表，通过选中 note 切换至 markdownComponent 组件，实现方法为在 Note 组件中添加 activate 和 url 状态，将 setactivate 传递到 NoteList 和 MarkdownComponent 组件通过

```js
return(
  {activate?(<NoteList/>):(<MarkdownComponent>)}
)
```

进行组件切换。

增加了 MarkdownComponent 的显示边框效果。

## 2024/8/12

代办：

- 修改 Note 界面的 side Nav，现在的 Nav 分类不符合需求，改成“笔记本-笔记”检索中*笔记本*栏会更便于检索。设想通过修改 notes.json 文件自动生成相应 side Nav 内容。  
  通过在 Note.js 中 fetch 得到 json 数据，将数据传递到 SideNav 和 NoteList 中，SideNav 通过 OnClick()触发 setEventKey 来选择 NoteBook，eventKey 传递到 NoteList 中渲染相应 notes。

- 修改 side Nav 样式，使其跟随页面滚动。  
  尝试通过`position:fixed`样式进行固定，初步完成。修改了 nav-link 样式，鼠标悬停时会有悬浮放大效果并产生阴影。

- 发现 top Nav 在不同分辨率的显示器上的效果不一，尝试修改样式，使 Nav 和搜索框分别位于屏幕左右相对固定位置。  
  在宽很大的屏幕上渲染时，NavBar 右侧会有一块不属于 margin 或 padding 的空白，暂时未找到解决方法需要进一步学习。

- 发现实际渲染内容超出屏幕大小，浏览器右侧和下方出现滑条，尝试改进。  
  main-section 添加样式`width:auto !important`解决相关问题。发现因为 BOOTSTRAP 中 Container 自带`width:100%`，此样式会使组件宽超出屏幕。但 percentage 应该是根据上级组件容纳宽度的大小进行百分比分配，而 main-section 上级为 APP，不应该出现此类现象，具体原因需要进一步学习分析。

- 尝试使用 marked 对 markdown 渲染进行优化，增加代码高亮和表格渲染。使用 marked 和 highlight.js 进行渲染。  
  出现 pre code 代码块类名错误，错误：`language-html`正确：`hljs language-html`且手动修改后仍未出现相应的代码渲染样式。需要继续学习、实验

## 2025/2/6

### 项目进展

- 完善侧边栏\
  使用`position:sticky; top:var(--navbar-height);`样式使 Note 页面的侧边栏在浏览 Note 时固定，在滚动到页面底部时和其他组件一齐滚动以显示 Footer。
- 实现动态生成 Side Nav 内容\
  根据 fetch 的 json 文件生成 SideNav 内容。json 文件存储在公开 github 库中
- 修改 Top Nav 更符合正常顶部导航栏样式
- 删去一些组件使页面简洁

```css
.navbar {
  top: 0 !important;
  background-color: #c5c5c5 !important;
  width: 100vw !important;
  color: #ffff !important;
  position: sticky !important;
  height: var(--navbar-height) !important;
  z-index: 1000 !important;
}

.navbar-container {
  margin-left: 5vw !important;
  margin-right: 5vw !important;
}
```

- 删去了无用的搜索框，增加了 currPage 作为 Hook 实现当前页面在导航栏和侧边栏上加粗字体并改变字体颜色。

```js
<Nav.Link
  as={Link}
  to="/myTestSite/"
  className={props.currPage === "Home" ? "currPage" : ""}
  onClick={() => props.setCurrPage("Home")}
>
  Home
</Nav.Link>
```

- 调整了页面布局方式，放弃了使用 Row 和 Col，使用 CSS 进行页面调整。

- 实现了 Markdown 渲染 [组件代码](https://github.com/Afools/myTestSite/blob/main/src/components/utils/MarkdownComponent.js)

### 代办

- 解决 markdown 公式无法正常渲染的问题。 已解决\
  使用 MarkDown 组件和 react-syntac-highlighter 组件进行渲染，使用 remark-math 和 rehype-katex 渲染公式, remark-gfm 渲染表格，参考了[React-Markdown 官方 GitHub](https://github.com/remarkjs/react-markdown?tab=readme-ov-file#use)\
  通过自定义 css 修改表格渲染效果。

  ```css
  .markdown-body table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
  }
  .markdown-body th,
  .markdown-body td {
    padding: 12px 15px;
    border: 2px solid #000; /* 修改表格线的颜色和宽度 */
  }

  .markdown-body th {
    background-color: #f4f4f4; /* 表头背景颜色 */
    font-weight: bold;
  }

  .markdown-body tr:nth-child(even) {
    background-color: #f9f9f9; /* 偶数行背景颜色 */
  }
  ```

- 调整侧边栏，在小尺寸屏幕中侧边栏隐藏。
- 考虑将网页软件化，进行自动化笔记部署
