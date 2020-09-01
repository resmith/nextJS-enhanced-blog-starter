---
author: Robert Smith
date: '2020-08-17T07:00:00.000Z'
title: 'Markdown - Basics - Part2'
---

## Images

- Put one greater than sign ">" in front of the content

Example
```markdown
![Image Title](image-example.webp)
```

Renders the image

>![Image Title](image-example.webp)

## Links
- To create a link, put the title of the link in brackets and the url in parentheses
- To give the link a tooltip, put the tool tip text in quotes after the URL.


Example
```markdown
[411 Tech Info](https://www.411tech.info/)
[411 Tech Info](https://www.411tech.info/ "Get all your tech info here")
```

Renders

>[411 Tech Info](https://www.411tech.info)
>
>[411 Tech Info](https://www.411tech.info "Get all your tech info here")



## Basic Table


_Note:_ tables are part of the Markdown extended syntax.

```markdown
| Name  | Studying         |
| ----- | ---------------- |
| Hazel | Engineering      |
| Ricky | Computer Science |
```

renders

>| Name  | Studying         |
>| ----- | ---------------- |
>| Hazel | Engineering      |
>| Ricky | Computer Science |

## Basic Table with alignment specified

```markdown
| Left  |      Center      | Right |
| :---- | :--------------: | ----: |
| Hazel |   Engineering    |       |
| Ricky | Computer Science |       |
```

renders

>| Left  |      Center      |    Right |
>| :---- | :--------------: | -------: |
>| Hazel |   Engineering    | Freshman |
>| Ricky | Computer Science | Sophmore |

## Horizontal Rule
- Use three or more asteriks("*"), underscores("_") or dashes("-") to create a horizantal line.

Example<br>
```markdown
***
___
---
```

Renders

>***
>___
>---

## Code

- Use three single back ticks "`" to start and end a code block.
- Put the language after the first three "`". E.g. ```javascript
- *Note:* you can also indent the code by four spaces or one tab as an alternative method
- *Note:* You can use markdown to wrap content in the HTML <code> tag by using one or more backticks. The HTML code tage defines content as code and displays it in a monofont. This tag is not deprecated, but it's recommended to use CSS for richer formatting


````
    ```json
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
    ```
````

renders

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Create a Heading Id

Example<br>
```Markdown
### Demo 1 Heading {#demo1}
```

Renders the HTML:

```HTML
<h3 id="demo1">Demo 1 Heading </h3>
```

## Link to the Heading Id
To link to the heading id

```Markdown
[Heading IDs](#demo1)
```

will render in HTML as:

```HTML
<a href="#demo1">Heading IDs</a>
```
## Escaping characters
- 

<br><br>
[Next Page >>>](/markdown-p3)
