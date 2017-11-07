import re
def get_matching_words(regex):
 words = ["aimlessness", "assassin", "baby", "beekeeper",
 "belladonna", "cannonball", "crybaby", "denver", "embraceable",
 "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast",
 "issue", "kebab", "kilo", "laundered", "mattress", "millennia",
 "natural", "obsessive", "paranoia", "queen", "rabble",
 "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid",
 "unbearable", "union", "videotape"]
 matches = []
 for word in words:
 	if re.search(regex,word):
 		matches.append(word)
 return matches

match_list = get_matching_words(r"e\b")
print match_list