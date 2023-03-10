import React, {Component} from "react";
// import ArticleBody from "./components/ArticleBody";
// import ArticleActions from "./components/ArticleActions";
import Article from "./components/Article";
import LangContext from "./components/lang_context";

let EN = {
  title: "NVIDIA NEWS",
  article_title: "NVIDIA Accelerated AI on Azure",
  description: "Article description:",
  description_text:
    "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
  current_lang: "EN",
  action: "Read",
};
let UA = {
  title: "НОВИНИ NVIDIA",
  article_title: "Прискорений штучний інтелект NVIDIA в Azure",
  description: "Опис статті:",
  description_text:
    "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
  current_lang: "UA",
  action: "Читати",
};

let selectLang = EN.current_lang;

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: EN,
    };
  }

  SetLangEN() {
    this.setState({ lang: EN });
  }

  SetLangUA() {
    this.setState({ lang: UA });
  }

  componentDidMount() {
  selectLang = localStorage.getItem("lang") || selectLang;
  this.setState({ lang: selectLang === "EN" ? EN : UA });
}

  componentDidUpdate(prevProps, prevState) {
  if (prevState.lang.current_lang !== this.state.lang.current_lang) {
    selectLang = this.state.lang.current_lang;
    localStorage.setItem("lang", selectLang);
  }
}

  render() {
    const { lang } = this.state;

    return (
      <div className="wrapper">
        <LangContext.Provider value={this.state.lang}>
          <h1 className="title">{lang.title}</h1>
          <Article>
            <div className="article__title">
              <h2>{lang.article_title}</h2>
            </div>
          </Article>
          <div className="lang">
            <button
              onClick={this.SetLangUA.bind(this)}
              className={`lang-btn ${lang.current_lang === "UA" && "active"}`}
            >
              UA
            </button>
            <button
              onClick={this.SetLangEN.bind(this)}
              className={`lang-btn ${lang.current_lang === "EN" && "active"}`}
            >
              EN
            </button>
          </div>
        </LangContext.Provider>
      </div>
    );
  }
}

export default App;