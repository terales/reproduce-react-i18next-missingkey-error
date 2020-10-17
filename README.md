## Reproduce a `i18next::translator: missingKey` error

Initial question:<br>
https://stackoverflow.com/questions/64394414/what-am-i-doing-wrong-with-setting-up-i18next-in-react-getting-a-i18nexttran

#### Error reproduced:

![Error reproduced](https://user-images.githubusercontent.com/1920639/96337940-43e12e80-1093-11eb-9ea2-3e362f2e1458.png)

#### Fix missing "translation" key in resources ([see commit](https://github.com/terales/reproduce-react-i18next-missingkey-error/commit/63505a99a7705b00518a4111c040920b9d6a71f2))

All resource files should store strings under `translation` key:

```json
{
+  "translation": {
    "selectAction": "Select Action",
    "workflow": "Workflow",
    "details": "Details"
+  }
}
```

## Try it yourself

```shell
npm install
npm run build
npm start
```
