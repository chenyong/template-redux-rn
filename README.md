
Template Redux React Native
----

Well, here's a basic demo of React Native(iOS), with:

* Redux
* `react-native-router-flux`

### Usage

假设项目名是 `yourDemo`:

```bash
git clone git@github.com:ElemeFE/template-redux-rn.git
react-native init yourDemo
cp -r template-redux-rn/app template-redux-rn/index.*.js yourDemo/
cd yourDemo
perl -pi -e 's/templateReduxRN/yourDemo/g' index.*.js
npm i --save react-native-router-flux redux react-redux
react-native run-ios
```

### Trouble Shoot
