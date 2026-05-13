type varint = number;
type optvarint = varint;
type pstring = string;
type buffer = Buffer;
type u8 = number;
type u16 = number;
type u32 = number;
type u64 = bigint;
type i8 = number;
type i16 = number;
type i32 = number;
type i64 = bigint;
type bool = boolean;
type f32 = number;
type f64 = number;
type UUID = string;
type option = unknown;
type entityMetadataLoop = unknown[];
type topBitSetTerminatedArray = unknown[];
type bitfield = number;
type bitflags = number;
type container = Record<string, unknown>;
type array = unknown[];
type restBuffer = Buffer;
// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey
type nbt = unknown;// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey
type optionalNbt = unknown;type ByteArray = Buffer;


interface vec3i16 {
    x: i16;
    y: i16;
    z: i16;
}

interface slot {
    present: bool;
}

interface particle {
    particleId: varint;
    // Unimplemented value
    data: unknown;
}

type particleData = undefined  | 
{
    blockState: varint;
} | 
{
    blockState: varint;
} | 
{
    red: f32;
    green: f32;
    blue: f32;
    scale: f32;
} | 
{
    fromRed: f32;
    fromGreen: f32;
    fromBlue: f32;
    scale: f32;
    toRed: f32;
    toGreen: f32;
    toBlue: f32;
} | 
{
    blockState: varint;
} | 
{
    rotation: f32;
} | 
{
    item: slot;
} | 
{
    positionType: string;
    entityId: varint | undefined ;
    entityEyeHeight: varint | undefined ;
    destination: position | varint ;
    ticks: varint;
} | 
{
    delayInTicksBeforeShown: varint;
};


type ingredient = slot[];


/**
 * This is a bitfield
 * Format: (name : bits a-b : signed)
 * x : 0-25 : true
 * z : 26-51 : true
 * y : 52-63 : true
*/
type position = number;


type previousMessages = {
    messageSender: UUID;
    messageSignature: Buffer;
};


type entityMetadataItem = i8 | varint | f32 | string | slot | bool | position | nbt | particle | optvarint  | 
{
    pitch: f32;
    yaw: f32;
    roll: f32;
} | 
{
    villagerType: varint;
    villagerProfession: varint;
    level: varint;
};


// Unimplemented value
type entityMetadata = unknown;


interface minecraft_smelting_format {
    group: string;
    ingredient: ingredient;
    result: slot;
    experience: f32;
    cookTime: varint;
}

type tags = {
    tagName: string;
    entries: varint[];
};


interface chunkBlockEntity {
    y: i16;
    type: varint;
    nbtData: optionalNbt;
}

interface command_node {
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-2 : false
     * has_custom_suggestions : 3-3 : false
     * has_redirect_node : 4-4 : false
     * has_command : 5-5 : false
     * command_node_type : 6-7 : false
    */
    flags: number;
    children: varint[];
    redirectNode: varint | undefined ;
    extraNodeData: undefined  | 
{
    name: string;
} | 
{
    name: string;
    parser: a2_parser;
    properties: undefined  | 
{
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-5 : false
     * max_present : 6-6 : false
     * min_present : 7-7 : false
    */
    flags: number;
    min: f32 | undefined ;
    max: f32 | undefined ;
} | 
{
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-5 : false
     * max_present : 6-6 : false
     * min_present : 7-7 : false
    */
    flags: number;
    min: f64 | undefined ;
    max: f64 | undefined ;
} | 
{
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-5 : false
     * max_present : 6-6 : false
     * min_present : 7-7 : false
    */
    flags: number;
    min: i32 | undefined ;
    max: i32 | undefined ;
} | 
{
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
     * unused : 0-5 : false
     * max_present : 6-6 : false
     * min_present : 7-7 : false
    */
    flags: number;
    min: i64 | undefined ;
    max: i64 | undefined ;
} | 
{
    registry: string;
} | 
{
    registry: string;
};
    suggestionType: string | undefined ;
};
}