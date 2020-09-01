---
author: Robert Smith
date: '2020-08-17T07:00:00.000Z'
title: 'Markdown - Basics - Part1'
---

# Introduction
[411 Tech Info](https://www.411tech.info/)


This is an opinionated guide on Markdown. If there is a generalized prefered way of using specific markdowns, the others are not shown to keep the content focused, removing any extraneous noise. It's meant to cover what most users will need for creating content.

# Headings

- Put # before the heading
- The number of "#" signifies the heading level
- Up to 6 "#"s

| Example                         | Renders                              |
| :------------------------------ | ------------------------------------ |
| # Heading 1<br>###### Heading 6 | <h1>Heading 1</h1><h6>Heading 6</h6> |

|

## Paragraphs

To create seperate paragraphs, include a blank line in between the paragraphs

```markdown
Paragraph 1

Paragraph 2
```

renders

Paragraph 1

Paragraph 2

## Line Breaks

To create seperate paragraphs, include a blank line in between the paragraphs

```markdown
Paragraph 1
Paragraph 2
```

renders

Paragraph 1  
Paragraph 2

## Bold / Italics

- Put one asterik("\*") or underscore("\_) before and after the item to italicize
- Put two asteriks("\*") or underscores("\_) before and after the item to bold
- Put three asteriks("\*") or underscores("\_) before and after the item to bold and italicize

| Example                                     | Renders                                 |
| :------------------------------------------ | :-------------------------------------- |
| \*Be italic in life\*                       | _Be italic in life_                     |
| \_Be italic in life\_                       | _Be italic in life_                     |
| \*\*Be bold in life\*\*                     | **Be bold in life**                     |
| \_\_Be bold in life\*\*                     | **Be bold in life**                     |
| \*\*\*Be both italic and bold in life\*\*\* | **_*Be both italic and bold in life*_** |
| \_\_\_Be both italic and bold in life\_\_\_ | **_*Be both italic and bold in life*_** |

## List

- Ordered list have a number followed by a period, a space and then the content
  -- The numbers don't have to be in order
- Unordered list have a dash("-"), asterik("\*") or a plus sign ("+") in front of them

 Example                    
```markdown
1. Orderly conduct please 
1. Orderly conduct please 
- No unoderly conduct     
* No unoderly conduct     
+ No unoderly conduct     
```

 Renders                   |

1. Orderly conduct please 
1. Gave a 1 but got a 2   
- No unoderly conduct     
\* No unoderly conduct    
+ No unoderly conduct     




## Blockquotes

- Put one greater than sign ">" in front of the content

Example  
\> Don't be a blockhead

Renders

> Don't be a blockhead

<br><br>
[Next Page >>>](/addtl/markdown-p2)
