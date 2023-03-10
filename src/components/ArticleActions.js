import React, {Component} from "react";
import LangContext from "./lang_context"

class ArticleActions extends Component{

  render(){
    return (
      <LangContext.Consumer>
        {(context) => {
          return (
            <div className="article__actions">
              <button className="article__btn">{context.action}</button>
            </div>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

export default ArticleActions;

