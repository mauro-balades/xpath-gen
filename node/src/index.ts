
class XPath {

  private _xpath: string;
  private _default_opts = {
    attributes: []
  };

  constructor() {
    this._xpath = "";
  }

  public XPath(): string {
    return this._xpath;
  }

  public element(tagname: string, options = this._default_opts): XPath {

    let statement: string = `/${tagname}`;
    
    return this;
  }
  
  
}

export default XPath
