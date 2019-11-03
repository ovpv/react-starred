<h3 align="center">React Starred</h3>

---

## 📝 Table of Contents

- [About](#about)
- [Usage](#usage)
  - [Demo](#demo)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This component directly provides you the Stars rating component with all the options/settings you need.

### Prerequisites

This module is meant to be used in react projects.

### Installing

install this module using the following command in your project directory:

```
npm i -S react-starred@latest
```

## 🎈 Usage <a name="usage"></a>

one the module is installed in the project, import the module into the file you want to use with the following command:

```
import Stars from 'react-starred';
```

once imported, you can use the Stars component with the following syntax:

```
<Stars given={3} on={5} updateGiven={yourMethodToUpdateGivenStarsValue} />
```

The best way to use this component is as follows:

```
const App = () => {
	const [given, updateGiven] = useState(3);
	useEffect(() => {
		console.log(given); /* you will get the updated given stars count here */
	});
	return (
		<div>
			<Stars given={given} on={10} updateGiven={updateGiven} />
		</div>
	);
};

render(<App />, document.getElementById("app"));
```

### Demo <a name = "demo"></a>

click [here](https://csb-pmxph-5ft3ppq9y.now.sh/) to view demo.

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [ReactJS](https://reactjs.org/) - Web Framework
- [FontAwesome](https://fontawesome.com/) - library for fonts icons

## ✍️ Authors <a name = "authors"></a>

- [@ovpv](https://github.com/ovpv) - Idea & Initial work
