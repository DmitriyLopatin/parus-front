import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx);
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<title>Парус-КАЗ.Бюджет</title>
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="modal-root" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
