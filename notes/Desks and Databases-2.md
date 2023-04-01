## Metadata
* URL: [https://www.linkedin.com/pulse/desks-databases-todd-bandrowsky/](https://www.linkedin.com/pulse/desks-databases-todd-bandrowsky/)
    * Title: [[Desks and Databases]]
* Author: [[Todd Bandrowsky]]

## Highlights
* Scale via cores, not machines. I think the complexity of the Cloud, kubernetes, azure and all of that, is simply beyond what small clients with small projects need. It's good stuff, for sure, but my experience with it is that for smaller clients the set-up, maintenance and provisioning are enormous sinks of money. There's a vast hidden human cost due to the need to interface between operations and development, and the kinks introduced by separations of concerns and security. There's the added complexity of even architecting such solutions. Why? Most firms are not Google, or Amazon.
* Standard Data Dictionary. I have found that many projects require the same standard fields, over and over again. The rules in the database are the same. In Corona, there is a standard body of fields that cover names, addresses, measurements, and the scientific units. So, every product in Corona will come out of the gate with validations, storages and the same rules for those things. In general, Corona will favor speed of implementation and standards over customizability. Don't like that the name in Corona is only up to so many characters? Too bad. Don't like the name validation has certain rules? Too bad. Or rather, not too bad, but rather, you can change it but that will cost you extra. Guess what? Most smaller clients will simply not care.
  * **Note**: Ok so opinionated framework like rails?
* A Need for Speed. Corona will go all in for speed. I get ahead of myself but during my research into my SAT solver, I discovered a few things about how data can be arranged, a sort of a database that could crunch hundreds of millions of rows per second per core. I am testing this on a 24 core machine, and I want to see that baby scale across them cores and use them to their fullest. I'll use the GPU too, if I can. This means some design constraints. All non-index data is natively read and written is mappable to standard C structs.
  * **Note**: Concurrency?
* Secondly, being aligned in rectangular arrays is ultra-sweet for going really fast in a GPU or a CPU. You can easily find rows, pieces of rows, and so on. If you have nested object data, that's manageable, too.
  * **Note**: Why?
