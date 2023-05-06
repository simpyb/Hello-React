const parent = React.createElement('div', {id : 'parent'}, 
[React.createElement('div', {id : 'child'}, 
[React.createElement('h1', {}, "HELLO REACT FIRST PARENT"),
React.createElement('h2', {}, "HELLO REACT FIRST PARENT TWO")]),
React.createElement('div', {id : 'child2'}, 
[React.createElement('h1', {}, "HELLO REACT FIRST PARENT"),
React.createElement('h2', {}, "HELLO REACT FIRST PARENT TWO")])]);

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent)

        const parent1 = React.createElement('div', {id : 'parent'}, 
[React.createElement('div', {id : 'child'}, 
[React.createElement('h1', {}, "HELLO REACT FIRST PARENT"),
React.createElement('h2', {}, "HELLO REACT FIRST PARENT TWO")]),
React.createElement('div', {id : 'child2'}, 
[React.createElement('h1', {}, "HELLO REACT FIRST PARENT"),
React.createElement('h2', {}, "HELLO REACT FIRST PARENT TWO")])]);

        const root1 = ReactDOM.createRoot(document.getElementById('root1'));
        root1.render(parent1)