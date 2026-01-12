# Fren Finder
**Advanced Nostr Discovery Tool**

Fren Finder helps you discover interesting people on the Nostr network through intelligent matching algorithms and multiple discovery strategies.

## Features

### Discovery Modes
- **Social Graph**: Find friends of friends through your network connections
- **Shared Interests**: Match people based on hashtags in your bio
- **Niche Communities**: Discover users focused on rare and specific topics
- **Hashtag Discovery**: Search for users posting about specific tags you choose

### Secure Login Options
- **Browser Extension**: Works with Alby, nos2x, Flamingo, and other NIP-07 extensions
- **Private Key (nsec)**: Direct login with automatic 15-minute timeout for security
  - Never stored or transmitted
  - Cleared immediately on logout
  - For trusted devices only

### Smart Filters
- **Activity Level**: Filter by posting frequency (very active, moderate, occasional)
- **Network Size**: Filter by follower count (50+, 200+, 500+, 1000+)
- **Content Filters**: 
  - Hide NSFW content automatically
  - Filter out spam and bot accounts
  - Remove deleted/abandoned accounts
- **Recent Activity**: Option to show only users active in the last month
- **Note Requirements**: Filter by minimum number of posts

### Advanced Features
- **Cross-Reference Mode**: Compare your network with another user to find mutual connections
- **Match Scoring**: Each profile gets a score based on:
  - Social connections (mutual follows)
  - Shared interests (hashtags)
  - Posting engagement
  - Topic rarity for niche discovery
  - Mode-specific weighting
- **Spam Detection**: Automatically filters low-quality accounts based on:
  - Profile completeness
  - Posting patterns
  - Account activity
  - Username patterns

### User Experience
- **Dark and Light Themes**: Toggle between themes
- **Direct Actions**: Follow users directly from the app (requires login)
- **Profile Links**: View full profiles on njump.me
- **Separate Sections**: Already-following users shown separately
- **Configurable Results**: Choose how many results to display (10-100)

## Getting Started

### What You Need
- A Nostr public key (npub) or private key (nsec)
- Optionally: A Nostr browser extension like Alby or nos2x

### How to Use
1. **Login**: 
   - Click "Login" and choose Extension Login or Private Key
   - Or paste your npub to browse anonymously
2. **Select Discovery Mode**: Choose which matching strategy to use
3. **Adjust Filters**: Set activity level, network size, and content filters
4. **Search**: Click "Discover Frens" to find matches
5. **Browse Results**: View profiles, match scores, and follow directly

## Discovery Mode Details

### Social Graph
Analyzes your follow list and finds friends of friends. Scoring prioritizes mutual connections (70%) over shared interests (20%) and engagement (10%).

### Shared Interests
Compares hashtags in your bio with others across the network. Scoring emphasizes interest matching (70%) with secondary factors from social connections (20%) and niche topics (10%).

### Niche Communities
Finds users focused on rare and specific topics. Uses topic rarity scoring (70%) to surface specialized communities rather than popular topics.

### Hashtag Discovery
Search for specific hashtags you choose. Match or any mode available. Scoring weights hashtag matches (80%) with posting engagement (15%) and social factors (5%).

## Privacy and Security

### What We Do
- Run entirely in your browser
- Connect directly to Nostr relays
- Auto-logout private keys after 15 minutes
- Clear keys immediately on logout or page close

### What We Don't Do
- No private key storage
- No tracking or analytics
- No data collection

## Technical Details

### Relay Configuration
Uses multiple public Nostr relays:
- wss://relay.damus.io
- wss://relay.primal.net
- wss://nos.lol
- wss://relay.snort.social
- wss://nostr.wine

### Spam Detection
Automatically filters accounts showing:
- Generic/suspicious usernames (test, bot, spam patterns)
- Deleted account markers ("nobody", "account deleted")
- Empty profiles with minimal activity
- No recent posting history
- Abandoned accounts (no metadata + low activity)

### Performance
- Batch fetching for efficient data loading
- Result caching for faster searches
- Configurable result limits (10-100 profiles)
- Progress indicators during searches

## Known Limitations

- Relay rate limiting may affect search speed
- Not all relays support all query types
- Hashtag search depends on relay capabilities
- Large networks may take longer to analyze

## Contributing

Want to improve Fren Finder?
- Report bugs via GitHub issues
- Suggest features and improvements
- Submit pull requests
- Help improve documentation
- Share feedback on Nostr

## Credits

Built using:
- [Nostr Protocol](https://github.com/nostr-protocol/nostr) - Decentralized social protocol
- [nostr-tools](https://github.com/nbd-wtf/nostr-tools) - Nostr utilities library
- Thanks to the Nostr community for feedback and support

## Support

- **GitHub**: Report issues or contribute
- **Nostr**: Find me at npub12p5753xcjal8034w5czap3fcdvj9qj36h5873g73ea05emw2gznszr0ann

## License

MIT License - See LICENSE file for details

---

**Built for the Nostr community with ❤️**
