type varint = number;
type varlong = bigint;
type pstring = string;
type u16 = number;
type u8 = number;
type i64 = bigint;
type buffer = Buffer;
type i32 = number;
type i8 = number;
type bool = boolean;
type i16 = number;
type f32 = number;
type f64 = number;
type UUID = string;
type option = unknown;
type entityMetadataLoop = unknown[];
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
    itemId: i16;
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
    red: f32;
    green: f32;
    blue: f32;
    scale: f32;
} | 
{
    blockState: varint;
} | {
    item: slot;
};


type ingredient = slot[];


/**
 * This is a bitfield
 * Format: (name : bits a-b : signed)
 * x : 0-25 : true
 * y : 26-37 : true
 * z : 38-63 : true
*/
type position = number;


type entityMetadataItem = i8 | varint | f32 | string | slot | bool | position | nbt | particle  | string | 
{
    pitch: f32;
    yaw: f32;
    roll: f32;
} | position | UUID;


// Unimplemented value
type entityMetadata = unknown;


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
    parser: string;
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
command_node_extraNodeData_properties | number | number | 
{
    allowDecimals: bool;
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