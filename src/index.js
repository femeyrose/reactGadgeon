import React from 'react'
import ReactDom from 'react-dom'
import '../src/index.css'
import {data} from '../src/detail2'
// use same name 'data' used in the detail2 component

import SpecificBook from '../src/Third'
// specificBook is used instead of Third

const img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
const detail = {
  image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgZGhwaGRkYGRgYGBgYGBoaGhgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJCs0NDQ0NDE0NDQ2NjQ0NjQ0NDQ0NDQ0NDQxNDQ0NDQ0PTQ0NDE0NDU0NjE0NDQ0NjQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA/EAABAwIEBAMGBQIDCAMAAAABAAIRAyEEEjFBBSJRYXGBkQYTMkKhsRTB0eHwUmIjM3IHFSRDgpKi8RaDwv/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAAtEQACAQMDAgUDBQEBAAAAAAAAAQIDESEEEjFBURMUImGRMnGhBSOBsdHwUv/aAAwDAQACEQMRAD8A8bU9OmoAjqeigE3ZEBp3CNYLIepqFIX2UQqTbsCYg3Swx5go3GTKdRMOCg62C3rU+TyQOFJCtXAFnkqnDm8d1BSd0y6wzIuU3iJ5CjaYGS6reJO/w0QqDvIoV0JLoCFGwJwNIOdfRaFgZIA0br4qkwzS1sxZXPDcNmbG+pPQJsVfBkrSSyF/jyxpPXRZniONL7bD7ozjNZo5WG9wVSqSlbAdGmvqOJLq6WFLsaDrSntU+DwJcRPKOqv6HCqIIGo+Ykp0IyaEzqxjgzULitOMYamx0U35h9lWFR4diRd1caUkikoGcSSSUIRo2mbIJE03WWdkmsHXHmCkfooA7mU9Q2UAa4AU+nqmpAqxpo6bAWeSrsPT5h4o7BPlnkoMIznAURj3W3ItMScrPJVPEjyN8lY8TqcpHkqviohrRKJkpLgq1LTYowFZ8LoNc4B2kEmOyiNVSW2NwvC0gYYTpc9FcYmKOGc6Yc/4R2VXwzCGrVaxuky7/SNSo/abiPvakN+BnK0dhunRdotmBxc6iV/dlG8yZK4GIvBYF1R0AGJEkCYB3jdXGGotpzlAfHzOFgR0QKDkbJVVHC5KbBcPqPPK0nvoPUow4cU3Q4tJGu4H6o3imIdy8uUEW2J7wqh4JuicVHCAUpTy8Il/GwTAn6Iati3O3jwSeICiYyVTbGKMVkkakQpA1cLVRCAtTVM4KJwV3CRxJcSUuEMUrVEpWpDKfBxvxKapooRqp36KFS5QKkEl0Kwy6wEZFPhKMunoEHwx4ykFE8LdOeSbaKjFKNm7i4qRy+KC4w6XN8EbxVnOweCA4sQX22ACtB0rY+wGwKzwYDWOdcOJhvQj5kBSpyCeglWuLcBTptaPlg7w4mTHeI9USCqu9l3Ljhz/AHWGrV7AvHumdR1P39FQ4DA+8c0HQmB3P6d1YY6vNKjQAgNEuJ/quCfv6puExjmzlAzEBrTFwBHwj+okAp+MIyx3RUmuW/xwjRfhmUzkDmhvwkAQ5zmiSZFwyDrus7xAOc4ik0ujWByiNxKt6Ja3XK9xEu1AG+Wdm7dSR0U+Ha17SXuDGAyGtALjvb9U/bdGWNRwd3kpeH8EL71ahYemVz3foPVWzvZmkIBqPE9WNvabQ5Qv4o1stpUnEx8TjeesAKLEcVruaA+sGiJiGj8plTbCI3dXm7p2R3E+zlJoBc9zp0AgSPQwhq+FwzG8rb93uJH0A+qgii4S6s8u6BgI83E3QZpHRrS7vlE+oCXJroh8VJ/VJ/0FsdQkW+o/MwmV6bD8IcfDJ+RUDMK4/IT9F2phXsuaTgO8/ogd+w5WT5BHsb3CGeEcXhwu2EFVhLY1EUJJJKhgxPYExS0nJTKfA0i6kebJjzdTOHKoU+gMkkkrDC8FMkBHcNcAXz0QeAqFruUTZOoVHZn7SDKoRUi3dfYIxj82Qkxp9whuJtioRMi32U2PIhha6QA3yMqDiP8AmuvOn2GitEhyn7MmoU+QRBLnBo69/JGvc19cBo5WlzrXkt+Htcho80HhapDmxHK1xEmL5TfxXcK85y8QBMZcoMtaM8CdLtaPNEuQHFtt/cIxri6qWtEgENB1uJkdbmfVFUCIaWi55Wk7EAZ3n7DzVex0j4YHWb5geZ09YMDxC0+E4I4tawANfWhwm+Rl8rcwi5aHEjfLtKfTTk7oz15xpxW5g8yC1nMzNBdF3E3Ez5nynSEP+Ka0w5pP922sW7a31stw32fblhoLRGUDQls3dP8AUTqeiq63AXQ7duh75QYDekaLW4NI5cNdQk2jOlwgjMBI208hqUNNobRLu5ED6qzxXC30jna3vBE5dIudblDYzivvAA8Xbs0b+AhJk7cm6lO+YZQ6jhsRl5aIG4IykhMxGFxAAzODZ2zCfMBHYHi1TLlBe3QBvK0drXIVu2vTDJe05puS4yT0tsmRipLkXOvOErNIylahUZBID+sBp/JOpw4XY8EbCQ36lW2PqMrOGU5DpEiFVvo1aTiWvt4yD5IJRs/Y0wk5RzhlNjawkgCFWvKP4lic7pLQ128aFVzissmb4LByUkoSQZDOJzE1dCEscVIH8qZlspGUZbKoF26kCSS60KwibDvIcIMIrA/G4E/KdpQbWw4KUSHm3kqBkr3RLinD3bCGxY3nWCuYwc7t9I8IEKIsmnm6Oym1hIkX8ipHzMyJIabeA+qJAWsS4dodnJMZWiJvcuaLeAKlwlIZHGL5SGgEZiXPDRPYZTbuoKQMVTFoAPa+b/8AKu+H0y2m1wyiA9xn4SadEObMn4prwO6iF1JWTNJwbgdOm5odBDOdx2PuwCd7S9zj/wDU1XOGxYe9zmhtiWjYjmDS7tytFu6yuK4qXmsc1pcNzb3tbLaYNnD6a3VvwbkY1xcC3IJzTYuIEnW1iE9VremCODqqMmt1R3fH+mtw7HOkl0R0OkW/fzUWKpvY0GMw1IjfYTt+yOwNMBjW65iBNtDcxHYI3FUs2VojmdJ/0s/dMVWXc50dImrmaq4YVQ4ublcbAEzA2+wVDxP2fNJhdTcYuSJj97ra4jh+YnTW/lqe14HkgKnLyPBIO5vA6HsmxnGfPIcXWoZXHY8/wTXVXlzpBHS1t3HwH3T+M4ho0kMbo3TM75ZO41KuuNYL3Zc9lm2Dsuwdp/PBZDH1feVMoIysnwJ8fKPIqTlsjbqdbS/vyU1xb4OsokuDp1c36otlQiq+m7ROwdPO6k1sluYCeuUkuPgo8YP+JedYIHayFcXNO71NexWY3hwNUNkhpJuiX8CYSGsa42u4lE8XcTlcBe2iVXiBY0CbqtsVe6GqpNpWZD/8Sf0Hqkpv98nqUlVqRXiVjGJzNVwJBYjpBT22UDahiFMTLVA1soUVYauhIroRFklN5Dmkag2RrC41YIGZxu09xp4oCbhFYcn3rc25EzJm46XQsGS6+w2kAW1BeRlLRcj4i0z/ANw1XA6Wt7W+si/mlTMOeLXDh+dvRNY4ZSN5t4b/AGCOJTQTSMtqgkSL+N8p+/3Vy6RRAIFw8TIEB2Gouae85NOxVJTqQajYBzN9CCCCDvYH1Vrg6nwCHQ5jCeXNGUOZmANohyq9kxNRO4axmzgTL5c2ATmEkzeTcn7rQ4aq1rCTfKRJN7EgQehtp2Wfo1OcAC2cnoYHUgX010VvUPK8QY31m9zM33846LqfpdOLvJmKrT3ySZqODcSlxZmaILsjSYJkn4Zi8bLUYKuHvI0DGgHxPMfoB6rwnEYZxAe53NAyjoIER9Fc8D9s69B2Wp/iMtJPxgAAWf8ANYDX1Q6jbUk3FWI9Fs9UM91/h7QWBxJ/ltfr9lU8Sw4MzAzb7ho/eE3gvGWV6YdTeHAwDsW7kObqDJjzRuIY18g9vQfqsbTi8mapTTRlcbhM1KowDmyyO5cDlA849V5jxfCPoPGHAlwAzdb3v46+EL2Di3+Hzt0bAgC5FgABqS4gAeCz7eAh7Ktao0mu4lxJIhsaNHYNj0C028RJdTLptR5aUt3DePv/AIjF8NxZpGHfKMrTt3I807NmMN+J7hH5qN+H/wATLsND1/hRvAmEuzuHKAQybX6xuryvSdGTWZ9QnE0WgjMYLRoLSs7xA5nF11e8RxWjRJA3IjmOqHZhwJJvAus9aqlhGrSUHJbpMzMlJGOAk2XUm7NNolGknMbJXXthBcaOa8gJ+GdraSowwqTCAzZQpkL9SkF15ufFcaoWP3FkS52Wq1wloBaQb26kT5oV2qc83H5n+QoRq5O9w96SJgkxA69AT+agAuQpsZGYEX/Pom1RD97ib9CogehI1sVIkCRE7G2nmrjDV5FBw1DCxwAvLS4tJPSGeMDdVD2gOYdQWg66kjQ9O6LwjHZGlrZIqgbdhHX5/qrFVFezZYU35Xc0iHajsdQNzur2lSL2PA5rEG/9/W/j6LMh4Oa8Da23fvEGFfcEr2zh3MRl0tIBMyNPlXT/AE2pZuH8iZra1IrcYL9oH0hA1GWv1Vvj6dwNJkiRreI8iCq91Iix6lHsam0zTe6OcH4y/CPDmGWn42TAc38j0K9h4LxRtZrXNObMAQWxa2ju+o8ZXh+JpXP8jstF7CcbdTqig53K48s3h3Tz+4HVZ5xzt+DJqqN47o89T1rFUWuIJgkXHRp0nyEgefVV0XIPwHc2B/ZG03giXOnsN+iC4hUyw4mI+VDSe2WTzOrV+DC+0GGax5a2wklsjUR18V3g2EDmtcdWnSbSdFY+01M1HN5IaDZxtqPhsp+F4BpDGNGu+46lMquycux0NLPfCMerKTjWFyiQLkz+wTBT93hszoL3m3ULU8Xw0HI0QIkvIkSqfBcONSsxhaS2Zki0LnzldbmdqlJxeyOTNfgSkvZBwKl/SPRJY/NrsbPBR84UdVJidk3Dm6lxcGFqf1FHaNSyipOuSF2kuUmm8KIlhhKTBcJLoCsslrTmuLqKoNO4XXgzddq7Xm3p2VECsbVzNZ/aIEXgR3umYojkItygOHQpVBLJMWPn69FC4co6dVAEiaq74IA6A7m6Kw1cNzkX3AvezjftIHrogqxENI7+vRTYUZnGd27h1+YN+VWgZpOOS0r08r3gaZnQLAQ0ubLeo0v4qTgmLLH5Js4nXrtHcwB5qPEUy5oqXMtbm/1ZWlzig8hGl9xBm/8ALp1Ko6c1JCbKULP/AJmta5j4Y8SGyZ30DtdviiP2RtelSLWtY1rbAzHMHFpIBm4232CpcFXDgXnxI7zp9LK0wVTNdrHOcYmCybmPmg79fKF6WLi470Ip1JRltZmOIYfKSCI/msqoqWMgwRe1rjRazizMzc3un23OSD00cqB1BxB5AIBJlw08BPRcevZywbVwek+z3FX1KTS1vMWgkmYmBPc3Gqs3UgSc7pcbA6wegGgGizXCcJVYxjHVmkMYLU2wWh0nK+p1i0WVziMdTYMjXDMdL6E6Ena6CtHbUTa5szymvpSVVxj+OxB7TMcMjnOtMAaAHcx5aojD1BTYHfM6w8Nz2nRV3GC/MxzznA5g1xIZb5nNj4R9fROdjY5zBB00uY+IjYdldTLafAzTPw6Say+LosXOFV2R1jbT5R3Wi4VhGl+YRyjKCsZw9z3vDssTInrtK3GCp+7YAFw/1Gv4aSfDPR/p1FSTfXqWOXuuoP8AFFJcjzMDqeFI+aKGqlxAuFCx0FTVXgwvQvkyD6TRBlR0d1IDKZh6cuhURkLgpKTQXAEwJudYU9ehBhR02HMANdlbeCEeJAmxnuu1QIbE6XnrJ0+i7iQQ8giCNQo3bKIgQKrshZNjfLtI3HQqIP5Y2lICQf5suAjKrKHvIytiZvIP0j+bJ1JxEEdD9HaqN7uVo6fqk12+lnRH80UBawaDhDmkAGIykG5Bkl4GmlgLTsgKgIMHpa9tttk2hWAkyZLp366jqeZ2vVJhJJPQW3MbT1jfwRCEtsmwkYpzBDdAZ/nkYurvhWL5S5rS49feNZGwm1pJ6rOOjsb6wZP8/Nco1XsdmY4+Qt5ytmm1kqfplwSpSTyuTa1KNc/DRkRvXYZI7lgudfugRwbEP/5VNskWfVkWMkSwXB3gpmA9oobFR2U2uGgzrqSbeQ3VnS4zQAdmr3JJiQ3QQNGzoevVb0qdT1Ji/FmsND6/D8QYFSo1rXOgspN920nfmccz9BYdlc4bCsZkDRmOYEOjUzcCTrH18VnanHWOLcgOUXJh5JtsXSCZ6jZWHDH1HuaWg0mXJc8y4mLRmvrtcdIWLUVU6ySzY4+uhOd3J2Q/2ueczGuy3vEkCNnPdvpp4wqrBOD6jWuuwRmdo2B8rRsEHxxj3vcGvcWNmXu5czvmgG/qp+F04LGMJJcRMEaGxnvGyRUqLMpOyG0KDjShGGZdDbYNmd2ZjcrWfD0KOp8ROjk+nhwxga20BBtDQ7mXl6+ojXqPtwj2mh08aFDbPL5b9yx/EBJB/iqfUJJflojd1PueBMCTgpcK0EruJZDl6M5CCsG0ZTITcA3nmJg6KTC05aRKXD2nPlGpMIe5QXicLIkBA18PlMGy144Y0MnNPVVOPY0j4Zj6hCmXYzdcc2sptTZS1m88fyE3FfGZvdGihMfYjY7fYpjYynrKc11iusZyE9C0es/orKYnXDANfzlJgtto7ouOtHhP1T2mBf8Apt3l36E+igLHNqWEbT6EAfkVd8FpCxdHMRrbl2uesC46DuFTU6WZ0WFiTJ6dIBv5K3oYgs5dZAI0H/i4u+jQVdxFbMbIfxHhzmkvptcWjURnvN4c1pAHcoKjzXAb5kdLaDxWgw2JkGS1pJNzNORJBuG05t3/AEVFiqAaSRWBOpAcHdYuHmb/AMgqMXSnJ+mXI9tPSw7R9rjofunBztC8QLRNgB2AEWQVOtBtXc3/AKnD1H7qTO+0Yh3/AHgRNh86ilKPDsNcHwXOBt8LpdfR9z/3Ag+Guuq1XBA3nc8GwyjMYgfMQ6pzR4SNYWB95VNvxJPb3pd2+WRH6q6wfCszTTpuNV7jf3IeZ6Fz3Q1sHWxPgqhNQlvk+O5h1GldX0pu77IbxPHmpVayllIHLnaCGgHWJF/GB2AW19m+A5C2o9mUgQ1tzH9zp+YpezPsb7kNqVSHVALMAGRvh1PVaSpVLJLhZcPX67xZbIPB39BpI0IZSv8Akc9qpuLPytJOuy7j/aSkwWu5VDMU/EHMPh6pGl0rh+5VwkFX1Mm/DpK7fwirh/UpK3yM6hdXR81T7GPyVb/0eR4BhLgiOI0srgoeHv5gp+KuMhdDqGhlBpRfBDGIZP8AUFBh2y0ld4RUArNzaZhKhHwej4zhzSC4HvA0VHjKYyEhk/mtxhWU2sDom2niqfi1Gm6lVfBZlnKDoSUtIiZ5WTL57pmK+L+eqmot/wATXRygr/Ed4TUUNi091wHljuPopWs5Ce6jc3lB7/ZWQfUaA639I9S2T9Smj9v/AEn1hzOB2AHoBCVBkmA2evTxJ6KAXxkIAygbOJ5gT9MrebprCnovi2bKJMy73QM7Q0Fx03QwAPfq1gIA0+bQTJG6exrwMwa1omMxaHQf9TrT4Kri3G4fQrN+VrN/goufr1cSLeuiIpY1wN7DmBze4aCTEwHmYkH+aVGIqgwHVXPtMSXAG1stgN7gnRPpsZMNp1HuO1m2NoIyut3ndEmB4SfJaPNO5DqZ6NIw7rXJJyt2AFtdQuDE0wASzDObBtGW+05Sb2NoGndCfhmzfC156B7SIjX/AC9Y6oynwuk7/kYtp7Ma8bHXl7+UKmk+QoydPrj+DR8Be15zDBUHNbElhMgETDWublLvMQtUOLU6d20S07iabR/4uPXovMQxlKTRq12vn4TTc2egOV+uiixONxLmxnrvPcvj6pUqNKStJZ+4MtRqnL0TSX2ybriPt1WaTkpsaLXJLpB9FQcU9q6rwZqidQBp4QFkm4J7jzOy+JJPor3gfssavM7lYDvukSjp6CvZIfCjWrtJyb/CGcKwlXFPzOJy+krXNxRYBRYLptKuynFKmBOltkY/hwaM5POd1za+oc5erjojsUdPGmtsf5YN+B7pKH3z+qSReXcfsj2PNMCeYeKP4qJAkKuwb4cFY8TrEthejfJxFwBUnGwUuEafeNjWQVHgiJErgfznpKhD2CjTd7rMTsDDUN7Qvy4Utd88ATtvPiiPZyvyMadMoUP+0Mt/DW6g+B6oUUuTzLhbJrc1wMxMdgf0QD3czie6tvZym8ue5rZim/ykFUoNieqYQsHs/wCGDv7y0W1UFWly0/7p+/8A6VpjsMWYHDuIs+o49OsfQFQY+iGOog2im157zJj6KFFS86+KIyRAdbxmfENSw7dXZjJmGtEujczo3x1T6dN+jW5Z3F3ep/JU2C03x0Jg8tBLWho2c/4yJF2tmJ9dVBULc0nM8m8vsDrvM/ZTBlJl3uLnbtY6SfF0Eap1J74JpsyNmcxgnwzuAHpCq5cY3eTmHoV3gmmzlBklgAAibydBrunnB1Dd72gAiSarXG+lmlxgR912oHOE1K8xqOZ+mxi2+x6pjRhy7mfUIvJyNBn+0Fx+vVVdjFFLhEb8PTFhiBF/kf4RGWOvZEYfD0wQPxmUEGYbUBFvCPXVM95hiQC2r3OZgt4ZeqJwRwTnczqjDtma1zT0JjQqOTS4Zapxk7N2DhiHlsN4lMDQh4keaa90gB2Om02v5SrXDYLAOLYrsPbS++qsmcBwgJs13gQsdTVqPMX8DI6Km3iS+DNYDEYakcxzVXdSCVfUcZWxA5G5GfUqR+EptDmtYOyZw/FGmSCLLLVk6ibjHPubKcIU1ZzVvYtcFwhrGyfi3KZj8SGiJQWL9oWwQDdVTWPqHM426LFGhNvdVZpjUjLEMk/41vVJN/BNST70+wWyp3PP8KJcFbcQoAMBBVXg/jCtcezkXefJwUVeGddSUjNQDuFBRfFlPhv8wRe4UZD1jgznBomwACqPbiq00vjmTp0tuiMDjS1ozCLQqL2yxTXUw1ojmuhREwf2ZxRp0Kz4sG36xefusu1oyk9Ij81ssNhWt4Y9+jnAnxvaFQ1MKBhmO/rqkAHWA2LIyrmo9q8OG4PAULBxcAe0tgnwBes/x+K2Jf7stDKYazM4hrQG8p9TKtf9otRofh2tPwUp8JIA+yyMcu8EySbNnw3UbBSsgxtdjCcsPcbWBDR6RPkVHWe9wlzg1umVvK09gB8Sjp1iBDQS7+o6Ds1v5n0ReE4c57sziSd+qXKUYZY+jQnWajFENBocYp08xMmXXMdm6fdX2F9mMVXu8hoB0LgbHUtaLR2stNwLAUmNGUASLnfwKtamKp0rve1g3lwHmsU9VJu0EdaGgp01+5LPa+DLU/YfKeZ8tt8vrN/Qqxw/sbQylpcXGQQSGggdJAuFaP8AaTCCQ6uyR0l0jvAQ9P2jwp+Gr4AtdI8B0SZSrvuHF6WOFa/yVmI9lqE2Dw6InNYxvHVVlX2aY2bm+krSjjuGeCRVbI1m0od9Vj7te09wVSlXXNxl9JJdDG43gTWuEO1I8laV+BOaGup1HCR1RWMYSRLbBW+Aqgsgi46qVq1WKTQtaehJvbaxQN4dXZM1SfFCUKT3OcHP0RXHsYWu5ZVPSxbwCbyU2n4so7n1MNSOnjOyXA91PI8b3Wgp4kZVmRmNynnEuiArnRc7X6BU68ad7dTQfjm9Ulm5d1SU8tErzEu5S4Y8wV/XYCy/RZ/DnmCvaxli6MuTnlEHRIT8O+Hg91FupsIyXgKyG1wmIzZAT5Ku9rWnkGxK44uZBGoQnE8U6q9jXWgqkUXfFagZgAyNQB59VT8Ue1rMNT/p5iiPaTE8jKYO4+iocdWLnC+ggKXIlgmx/EH1qpqPg7AG4AGgAXaWGL7wXH6D8goqRgQG/wDUbnyCIo4dz/jfDdLmB6IJSSCinJ4XyNJYww4g9mX/AGRtDiVQXpMgXEu5vOBEQpaH4Wi6HD3h1kHTx7J+J425/wDlUmU+psAQkN7nZRuu7NieyN3O3siA/iHguc8w4fK7K2B4d9oUTcI0n4wZublx8wP1QdTEf1OLj/S2zR5praryQGDKDGms+Kbsa62EeKnwm/uwh2FZeXhsbusfRMD6Lfmc939vKI8Uq3DS3meZOpkpYagyZzK01bm4Eqc5OzwNdj2AjLSA8VI3jNQWAaPBCYiqCTuhsyNK64EumkWX++K7SJdMIin7S1BsPVUbnErrGE6BRwi+UHG64/BaVeLl93C66MdI0VaaDhspabiqcY2wU4SvexYvxvLohG4pNLpTH00KSRFCT4J/xwSQXukkdoheFIbh/iCuqj+RU2HHMrOo6Gq2UVU3KnwJOcIdxuieHkZ7q3wUX1audFVvrRUzHYKSvVAkqtDiSSgQUYk2MxJe+TsoabTqTCjIkp4bESitixHl3JzUJENB8f2ReEwGa735W90E2rBholFPoudzPNthKXLi3H9hxWbrIdiK9BuUUKeYxBLgSZ7KCvw+plBquDQRbt2hSU+KU6TRkZzjcqpxeMfUJLj+iXCMr4wu75GuUEryy/bgmztZocx/JQHEnayha0lJzY1WhRQhyb4wOqVS7UymSkbpEK0C22cT6dIuMAI3BcOLru0VyygxjdAlTrKOFyaaWllLMsIon4PLEo3DABNrvzHsuZoQNuSyHGEYyugjEAKteYKmfWQlR0q4RaLqyTyiT3ieKgQRKTXpm0QqtmF5kkP7xJTaF4iFhxzIzEE5UJhtUXiDyo3yZiuU2HdBUIXWlRq4S5CKzpTGCGymPclJNlSWCSd3gcxwBlOJLzeyiCcJPZRoiQRTqtboJKjq1nO1Nui4RFhqpGYa0n0Q4WRmXgGDVI1oAuuvqiICi1RZYt2XBIapNgFJ+FOXMSlSDWiTqmVcQXW26Ks3wElFLJyZsAiKOGggldwzmgd0q2ImyFtt2QaUYrc+S4/FNDbIU1C/wVcySiaL4slbEh/jSnzwOcIQ9Ryne5CVCiislSdkRuemOck4phTkjPKQiuJJIhQkkklCBFDRPraLiSHqQFCQSSRFnXJ9NJJV0J1GjVTVNEklUuUHD6WPwqZiXnqkkhXIb+kHUtHQpJI5cCo8jXapoSSV9CnyOcuBJJUgn0C6OikZqkkkvk0LlD36INySSkQpkT0xJJORklyJJJJWCJJJJQh//9k=',
  author: "Arthur",
  description: "sample text",

}

const names = ["john", "sam", "susan"]
const newName = names.map((name) => {
  console.log(name)
  return <h1>{name}</h1>
})
// created object detail

// method 1
// function Greeting(){
//  return <h4>hi this is femey</h4>
// }


// method 2---------commonly used
// function Greeting(){
//  return(
//   <div>
//   <h4>hi this is femey</h4>
//   </div> 
//  )
// }


// method 3
// const Greeting= () =>{
//   return React.createElement('h1',{},"Hello World")
// }
// arrow fn


// method 4
// const Greeting= () =>{
//   return React.createElement('div',{},React.createElement('h1',{},"Hello World"))
// }

// when more components are used

function Greeting() {
  return (
    // <div>
    <section className="main">

      {data.map((book) => {
        const {image,author,description}=book
        // return (
        //   <div>
        //   <p><img src={image} /></p>
        //   <h1>{author}</h1>
        //   <h4>{description}
        //   </h4>
        //   </div>
        // )
        // return (<Four book={book} key={book.id}></Four>)
        // instead of passing one by one you can pass all these in a single function Four

        // return (<Four key={book.id} {...book} ></Four>)
        // ...spread operator can be used, set all the properties inside the book


        return (<Four key={book.id} {...book} ></Four>)
        


      })}

      <First />
      <Second head="just a heading for first function second" number={22} />
      <Second secondhead="just a prop access, non repeat, access through prop."></Second>
      <SpecificBook img={detail.image}
        author={detail.author}
        desc={detail.description}
      >

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <h1>{newName}</h1>
        {/* accessing array elements one by one by using map function*/}
      </SpecificBook>
      {/* call using object */}
      {/* </div> */}




    </section>
  )
}

const First = () => <h4>hi this is femey  </h4>

// const Second = () => <h4>how are you</h4>

// or

const outside = "hello  this  text  is  outside  this  function"
const Second = (props) => {
  console.log(props)
  const title = "hello`this`text  is  outside return of this  function"
  return (
    <article>
      <h4 style={{ color: 'blue', background: 'green', fontSize: '1cm' }}>how are you</h4>
      <h4>how are you</h4>
      <h4>how are you</h4>
      <p>{6 + 6}</p>
      <p>{props.head}</p>
      <p>{props.secondhead}</p>
      <Image></Image>
      <h4>{title.toUpperCase()}</h4>
      <h4>{outside}</h4>
    </article>
  )
}

// // const Third =(props)=>{
// const Third = ({ img, author, desc, children }) => {
//   // const {img,author,desc}=props

//   const clickHandler=()=>{
//     alert("hello world...!")
//   }

//   const clickExample=(author)=>{
//     console.log(author)
//   }

//   return (
//     // <div>
//     //   <img src={props.img} alt="" />
//     //   <p>{props.author}</p>
//     //   <p>{props.desc}</p>
//     // </div>

//     <div>
//       <img src={img} alt="" />
//       <p>{author}</p>
//       <p>{desc}</p>
//       {children}
//       <h1 onClick ={()=>console.log(author)}>{author}</h1>
//       {/* children defined in between Third can be placed any where in the third */}
//       <button type="button" onClick={clickHandler}>For more details click here</button>
//       <button type="button" onClick={()=>clickExample(author)}>For more details examples</button>
//       {/* displays on click only of clickExample() */}
//     </div>
//   )

// }


const Image = () => {
  return (
    // {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="image1" /> */}
    <img src={img} alt="image1" />
  )
}


const Four = (props) => {
  const { image, author, description } = props
  // const { image, author, description } = props.book
  // when using spraed operator u can remove using .book in all places
  return (
    <article>
      {/* <p>{props.book.id}</p> */}
      {/* remove using .book when uses spread operator */}
      <img src={image} alt="" />
      <h1>{author}</h1>
      <h4>{description}</h4>
    </article>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
