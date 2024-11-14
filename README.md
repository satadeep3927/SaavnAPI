## Motivation

The JioSaavn API, while powerful, presents several challenges for developers due to its complex and undocumented structure, which makes efficient integration difficult. Additionally, the API lacks necessary type consistency, leading to potential errors and a frustrating experience when using it with TypeScript.

**SaavnAPI** is designed to simplify and streamline the process of interacting with JioSaavn's API by providing a strongly-typed, developer-friendly interface. Built with TypeScript, it ensures reliable type safety, giving developers confidence in their code, along with enhanced tooling support, such as autocompletion and error checking.

To further enhance security and data integrity, **SaavnAPI** incorporates **Zod** for schema validation, which ensures that API responses are validated before use, adding an extra layer of reliability.

With **SaavnAPI**, developers can focus on building music-based applications without the complexity of managing the JioSaavn API directly, providing an efficient, secure, and enjoyable development experience.

## Features

- **Simplified API Access**: Provides an intuitive and streamlined interface for accessing JioSaavn’s API, making it easy to search for songs, playlists, albums, and more.

- **TypeScript Support**: Fully written in TypeScript, delivering strong type safety, improved autocompletion, and enhanced error-checking to ensure reliable code.

- **Zod Validation**: Integrates with Zod for schema validation, ensuring that all API responses meet expected formats and structures, adding a layer of data security and consistency.

- **Modular and Extensible**: Designed with modularity in mind, allowing developers to use only the parts of the API they need, with the flexibility to extend functionality as needed.

- **Error Handling**: Includes robust error-handling mechanisms to help manage and debug potential issues more effectively when interacting with the API.

- **Built for Modern JavaScript Environments**: Compatible with the latest Node.js versions and ES modules, making it ideal for modern JavaScript and TypeScript environments.

- **Secure Data Handling**: Uses Zod to validate and sanitize API data, reducing the risk of handling malformed or unexpected data.

With these features, **SaavnAPI** aims to provide a secure, efficient, and developer-friendly experience for working with JioSaavn's services.

## Installation

To install **SaavnAPI**, you can use either `npm` or `yarn` to add it to your project.

### Using npm

```bash
npm install saavnapi
```

### Using yarn

```bash
yarn add saavnapi
```

## Common Usage

**Search for a Song**:

```typescript
import SaavnAPI from "saavnapi";

const songs = await SaavnAPI.search.searchSongs({
  query: "See you again",
  page: 0,
  limit: 10,
});

console.log(songs);
```

## Acknowledgement and Credit

Special thanks to [Sumit Kolhe](https://github.com/sumitkolhe) for providing a valuable reference point to start the development of this library.
