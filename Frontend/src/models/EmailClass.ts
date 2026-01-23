class EmailClass {
  "id": string;
  "source": string;
  "category": string;
  "suggestion": string;
  "reason": string;
  "content": {
    subject: string;
    body: string;
    from: string;
  };

  constructor(
    id: string,
    source: string,
    category: string,
    suggestion: string,
    reason: string,
    content: {
      subject: string;
      body: string;
      from: string;
    },
  ) {
    this.id = id;
    this.source = source;
    this.category = category;
    this.suggestion = suggestion;
    this.reason = reason;
    this.content = content;
  }
}

export default EmailClass;
