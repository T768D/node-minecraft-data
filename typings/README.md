This takes types from minecraft-data and converts them into typescript definitions

Type definitions are organised by folders and files
types -> (pc/bedrock) -> (version number) -> (type files)

The type files types.d.ts and enums.d.ts are ambients because other type files need to access their types

The rest are modules because some type names are overlapping, and I want users to be able to import types and organise them based on folder and file structure, instead of having incredibly long type names