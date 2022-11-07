# LIBRAIRIE NPM DE COMPOSANTES REACT
[![N|Solid](https://skillicons.dev/icons?i=react)](https://skillicons.dev)

> Travail projet 1, presenté par Anna Ferjani

## La bibliothèque de composantes web réutilisable comprend les composantes suivantes:
 
- AntInputSite
- AntTimeline
- BSAlert
- BSTable
- MuiAvatarGroup

&nbsp;&nbsp;
 
# ✅ AntInputSite

## Description

> Permet de créer un élément *input* pour saisir l'adresse d'un site Web, avec la possibilité d'ajouter des *addons* au début et à la fin d'un *input*

## Dépendances
> - [antd](https://www.npmjs.com/package/antd)

## Usage

``` Javascript
import { AntInputSite } from 'components/AntInputSite';

const placeholder = "Your site web";
const beforeArray = ['http', 'https'];
const afterArray = ['com', 'org', 'net'];

<AntInputSite  
    placeholder={placeholder}
    beforeArray={beforeArray}
    afterArray={afterArray}
/>
```

## Propriétés

| Nom | Type | 
| --- | --- | 
| placeholder | string | 
| beforeArray | array |
| afterArray | array|
| beforeString | string |
| afterString | string |

# ✅ AntTimeline

## Description

> Permet de créer des *timelines* automatiquement, à partir d'un tableau, passé en tant qu'un paramètre

## Dépendances

- [antd](https://www.npmjs.com/package/antd)

## Usage

``` Javascript
import { AntTimeline } from 'components/AntTimeline';

var items = [];

items.push({date: '2022-11-01', text:'Create a services'});
items.push({date: '2022-11-03', text: 'Solve initial network problems'});
items.push({date: '2022-11-07', text: 'Technical testing'});

<AntTimeline mode="left" items={items}/>
```

## Propriétés

| Nom | Type |
| --- | --- |
| mode | 'left' \| 'right' \| 'alternate' |
| items | array |

# ✅ BSAlert

## Description

> Permet de créer des messages de rétroaction contextuels pour les actions typiques de l'utilisateur avec la possibilité d'ajouter des *bootstrap* *icons* dans ces messages

## Dépendances

- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [bootstrap-css](https://www.npmjs.com/package/bootstrap-css)
- [bootstrap-icons](https://www.npmjs.com/package/bootstrap-icons)

## Usage

``` Javascript
import { BSAlert } from 'components/BSAlert';


const heading = "This is an alert's header";
const alertBody = "This is an alert — check it out!";

<BSAlert  
    variant="danger" 
    alertBody={alertBody}
    heading={heading}
    icon="dash"
/>
```

## Propriétés

| Nom | Type |
| --- | --- |
| variant | 'danger' \| 'success' \| 'warning' |
| alertBody | string |
| heading | string
| icon | 'dash' \| 'check' \| 'exclamation' |

# ✅ BSTable
## Description
> Permet de créer un *table* *bootstrap* à partir des tableaux, passés en tant que des paramètres

## Dépendances

- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)

## Usage

``` Javascript
import { BSTable } from 'components/BSTable';

var headers = ['First name', 'Last name', 'email'];
var content = [['John', 'Tremblay', 'jtremblay@gmail.com'],
            ['Gilles', 'Duquerroy', 'gduquerroy@cg.com'],
            ['Pierre-Luc', 'Dubé', 'pldube@cg.com']];

<BSTable headers={headers} content={content} striped='true'/>
```

## Propriétés

| Nom | Type |
| --- | --- |
| headers | array |
| content | array |
| stripes | boolean |
| bordered | boolean |
| hover | boolean |
| variant | "dark" |

# ✅ MuiAvatarGroup

## Description

>Permet de créer un groupe des *avatars* à partir d'un tableau avec des liens des images
## Dépendances

- [mui](https://www.npmjs.com/package/mui)

## Usage

``` Javascript
import { MuiAvatarGroup } from 'components/MuiAvatarGroup';

var img = [];

for(let i = 1; i <=5; i++)
    img.push(`assets/img/${i}.jpg`);

<MuiAvatarGroup images={img} max={img.length} spacing={medium}/>
```

## Propriétés

| Nom | Type |
| --- | --- |
| max | number |
| total | number |
| images | array
| spacing | 'medium' \| 'small' \| number |


## 🚀 - Démarrer storybook
```sh
npm run storybook
```

# 📝 License

> MIT **Free Software**