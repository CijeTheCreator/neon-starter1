import express, { Request, Response } from 'express';
import router from './customerCRUD';
import Helmet from "helmet"



const app = express();
const port = process.env.PORT || 3000;

Helmet.referrerPolicy({
  policy: "no-referrer",
})

Helmet.hsts({
  // 60 days
  maxAge: 86400,
  // removing the "includeSubDomains" option
  includeSubDomains: false,
})

Helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    "font-src": ["'self'", "external-website.com"],
    // allowing styles from any website
    "style-src": null,
  },
})

Helmet.frameguard({
  action: "deny",
})

app.use(Helmet())
app.use(express.json())


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  

