var documenterSearchIndex = {"docs":
[{"location":"metadata/#Metadata","page":"Metadata","title":"Metadata","text":"","category":"section"},{"location":"api/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/#Exports","page":"API Reference","title":"Exports","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Modules = [GeometryBasics]\nOrder   = [:module, :constant, :type, :function, :macro]\nPublic  = true\nPrivate = false","category":"page"},{"location":"api/#GeometryBasics.AbstractGeometry","page":"API Reference","title":"GeometryBasics.AbstractGeometry","text":"Abstract Geometry in R{Dim} with Number type T\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.AbstractMesh","page":"API Reference","title":"GeometryBasics.AbstractMesh","text":"AbstractMesh\n\nAn abstract mesh is a collection of Polytope elements (Simplices / Ngons). The connections are defined via faces(mesh), the coordinates of the elements are returned by coordinates(mesh). Arbitrary meta information can be attached per point or per face\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Circle","page":"API Reference","title":"GeometryBasics.Circle","text":"Circle{T}\n\nAn alias for a HyperSphere of dimension 2. (i.e. HyperSphere{2, T})\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Cylinder","page":"API Reference","title":"GeometryBasics.Cylinder","text":"Cylinder{N, T}\n\nA Cylinder is a 2D rectangle or a 3D cylinder defined by its origin point, its extremity and a radius. origin, extremity and r, must be specified.\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Cylinder2","page":"API Reference","title":"GeometryBasics.Cylinder2","text":"Cylinder2{T}\nCylinder3{T}\n\nA Cylinder2 or Cylinder3 is a 2D/3D cylinder defined by its origin point, its extremity and a radius. origin, extremity and r, must be specified.\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.FaceView","page":"API Reference","title":"GeometryBasics.FaceView","text":"FaceView{Elemnt, Point, Face, P, F}\n\nFaceView enables to link one array of points via a face array, to generate one abstract array of elements. E.g., this becomes possible:\n\nx = FaceView(rand(Point3f0, 10), TriangleFace[(1, 2, 3), (2, 4, 5), ...])\nx[1] isa Triangle == true\nx isa AbstractVector{<: Triangle} == true\n# This means we can use it as a mesh:\nMesh(x) # should just work!\nCan also be used for Points:\n\nlinestring = FaceView(points, LineFace[...])\nPolygon(linestring)\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.HyperSphere","page":"API Reference","title":"GeometryBasics.HyperSphere","text":"HyperSphere{N, T}\n\nA HyperSphere is a generalization of a sphere into N-dimensions. A center and radius, r, must be specified.\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.LineString","page":"API Reference","title":"GeometryBasics.LineString","text":"LineString(points::AbstractVector{<:AbstractPoint})\n\nA LineString is a geometry of connected line segments\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.LineString-2","page":"API Reference","title":"GeometryBasics.LineString","text":"LineString(points::AbstractVector{<: AbstractPoint}, skip = 1)\n\nCreates a LineString from a vector of points With skip == 1, the default, it will connect the line like this:\n\npoints = Point[a, b, c, d]\nlinestring = LineString(points)\n@assert linestring == LineString([a => b, b => c, c => d])\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.LineString-3","page":"API Reference","title":"GeometryBasics.LineString","text":"LineString(points::AbstractVector{<: AbstractPoint}, indices::AbstractVector{<: Integer}, skip = 1)\n\nCreates a LineString from a vector of points and an index list. With skip == 1, the default, it will connect the line like this:\n\npoints = Point[a, b, c, d]; faces = [1, 2, 3, 4]\nlinestring = LineString(points, faces)\n@assert linestring == LineString([a => b, b => c, c => d])\n\nTo make a segmented line, set skip to 2\n\npoints = Point[a, b, c, d]; faces = [1, 2, 3, 4]\nlinestring = LineString(points, faces, 2)\n@assert linestring == LineString([a => b, c => d])\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Mesh","page":"API Reference","title":"GeometryBasics.Mesh","text":"Mesh <: AbstractVector{Element}\n\nThe conrecte AbstractMesh implementation\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.MetaT","page":"API Reference","title":"GeometryBasics.MetaT","text":"MetaT(geometry, meta::NamedTuple)\nMetaT(geometry; meta...)\n\nReturns a MetaT that holds a geometry and its metadata\n\nMetaT acts the same as Meta method. The difference lies in the fact that it is designed to handle geometries and metadata of different/heterogeneous types.\n\neg: While a Point MetaGeometry is a PointMeta, the MetaT representation is MetaT{Point} The downside being it's not subtyped to AbstractPoint like a PointMeta is.\n\nExample:\n\njulia> MetaT(Point(1, 2), city = \"Mumbai\")\nMetaT{Point{2,Int64},(:city,),Tuple{String}}([1, 2], (city = \"Mumbai\",))\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.MultiPoint","page":"API Reference","title":"GeometryBasics.MultiPoint","text":"MultiPoint(points::AbstractVector{AbstractPoint})\n\nA collection of points\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.MultiPolygon","page":"API Reference","title":"GeometryBasics.MultiPolygon","text":"MultiPolygon(polygons::AbstractPolygon)\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.NormalMesh","page":"API Reference","title":"GeometryBasics.NormalMesh","text":"NormalMesh{Dim, T}\n\nPlainMesh with normals meta at each point. normalmesh.normals isa AbstractVector{Vec3f0}\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.NormalUVMesh","page":"API Reference","title":"GeometryBasics.NormalUVMesh","text":"NormalUVMesh{Dim, T}\n\nPlainMesh with normals and uv meta at each point. normalmesh.normals isa AbstractVector{Vec3f0} normalmesh.uv isa AbstractVector{Vec2f0}\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.NormalUVWMesh","page":"API Reference","title":"GeometryBasics.NormalUVWMesh","text":"NormalUVWMesh{Dim, T}\n\nPlainMesh with normals and uvw (texture coordinates in 3D) meta at each point. normalmesh.normals isa AbstractVector{Vec3f0} normalmesh.uvw isa AbstractVector{Vec3f0}\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.OffsetInteger","page":"API Reference","title":"GeometryBasics.OffsetInteger","text":"OffsetInteger{O, T}\n\nOffsetInteger type mainly for indexing.\n\nO - The offset relative to Julia arrays. This helps reduce copying when\n\ncommunicating with 0-indexed systems such as OpenGL.\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.PlainMesh","page":"API Reference","title":"GeometryBasics.PlainMesh","text":"PlainMesh{Dim, T}\n\nTriangle mesh with no meta information (just points + triangle faces)\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Polygon","page":"API Reference","title":"GeometryBasics.Polygon","text":"Polygon(exterior::AbstractVector{<:Point})\nPolygon(exterior::AbstractVector{<:Point}, interiors::Vector{<:AbstractVector{<:AbstractPoint}})\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Polytope","page":"API Reference","title":"GeometryBasics.Polytope","text":"Geometry made of N connected points. Connected as one flat geometry, it makes a Ngon / Polygon. Connected as volume it will be a Simplex / Tri / Cube. Note That Polytope{N} where N == 3 denotes a Triangle both as a Simplex or Ngon.\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Polytope-Union{Tuple{IT}, Tuple{T}, Tuple{Dim}, Tuple{N}, Tuple{Type{#s24} where #s24<:AbstractPoint{Dim,T},Type{#s19} where #s19<:GeometryBasics.AbstractNgonFace{N,IT}}} where IT where T where Dim where N","page":"API Reference","title":"GeometryBasics.Polytope","text":"The Ngon Polytope element type when indexing an array of points with a SimplexFace\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.Polytope-Union{Tuple{T}, Tuple{Dim}, Tuple{N}, Tuple{Type{#s24} where #s24<:AbstractPoint{Dim,T},Type{#s19} where #s19<:(GeometryBasics.AbstractSimplexFace{N,T} where T)}} where T where Dim where N","page":"API Reference","title":"GeometryBasics.Polytope","text":"The Simplex Polytope element type when indexing an array of points with a SimplexFace\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.Polytope-Union{Tuple{T}, Tuple{NDim}, Tuple{N}, Tuple{Type{#s24} where #s24<:(GeometryBasics.Ngon{Dim,T,N,P} where P where T where Dim),Type{#s19} where #s19<:AbstractPoint{NDim,T}}} where T where NDim where N","page":"API Reference","title":"GeometryBasics.Polytope","text":"The fully concrete Ngon type, when constructed from a point type!\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.Polytope-Union{Tuple{T}, Tuple{NDim}, Tuple{N}, Tuple{Type{#s24} where #s24<:(Simplex{Dim,T,N,P} where P where T where Dim),Type{#s19} where #s19<:AbstractPoint{NDim,T}}} where T where NDim where N","page":"API Reference","title":"GeometryBasics.Polytope","text":"The fully concrete Simplex type, when constructed from a point type!\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.Rect-Tuple{Vararg{Number,N} where N}","page":"API Reference","title":"GeometryBasics.Rect","text":"Rect(vals::Number...)\n\nRect(vals::Number...)\n\nRect constructor for indidually specified intervals. e.g. Rect(0,0,1,2) has origin == Vec(0,0) and width == Vec(1,2)\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.Rect-Union{Tuple{AbstractArray{PT,N} where N}, Tuple{PT}, Tuple{T1}, Tuple{N1}} where PT<:AbstractPoint where T1 where N1","page":"API Reference","title":"GeometryBasics.Rect","text":"Construct a HyperRectangle enclosing all points.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.Simplex","page":"API Reference","title":"GeometryBasics.Simplex","text":"A Simplex is a generalization of an N-dimensional tetrahedra and can be thought of as a minimal convex set containing the specified points.\n\nA 0-simplex is a point.\nA 1-simplex is a line segment.\nA 2-simplex is a triangle.\nA 3-simplex is a tetrahedron.\n\nNote that this datatype is offset by one compared to the traditional mathematical terminology. So a one-simplex is represented as Simplex{2,T}. This is for a simpler implementation.\n\nIt applies to infinite dimensions. The structure of this type is designed to allow embedding in higher-order spaces by parameterizing on T.\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Sphere","page":"API Reference","title":"GeometryBasics.Sphere","text":"Sphere{T}\n\nAn alias for a HyperSphere of dimension 3. (i.e. HyperSphere{3, T})\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Tesselation","page":"API Reference","title":"GeometryBasics.Tesselation","text":"Tesselation(primitive, nvertices)\n\nFor abstract geometries, when we generate a mesh from them, we need to decide how fine grained we want to mesh them. To transport this information to the various decompose methods, you can wrap it in the Tesselation object e.g. like this:\n\nsphere = Sphere(Point3f0(0), 1)\nm1 = mesh(sphere) # uses a default value for tesselation\nm2 = mesh(Tesselation(sphere, 64)) # uses 64 for tesselation\nlength(coordinates(m1)) != length(coordinates(m2))\n\nFor grid based tesselation, you can also use a tuple: ```julia rect = Rect2D(0, 0, 1, 1) Tesselation(rect, (5, 5))\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.TriangleMesh","page":"API Reference","title":"GeometryBasics.TriangleMesh","text":"TriangleMesh{Dim, T, PointType}\n\nAbstract Mesh with triangle elements of eltype T.\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.TupleView","page":"API Reference","title":"GeometryBasics.TupleView","text":"TupleView{T, N, Skip, A}\n\nTupleView, groups elements of an array as tuples. N is the dimension of the tuple, M tells how many elements to skip to the next tuple. By default TupleView{N} defaults to skip N items.\n\na few examples:\n\n\nx = [1, 2, 3, 4, 5, 6]\nTupleView{2, 1}(x):\n> [(1, 2), (2, 3), (3, 4), (4, 5), (5, 6)]\n\nTupleView{2}(x):\n> [(1, 2), (3, 4), (5, 6)]\n\nTupleView{2, 3}(x):\n> [(1, 2), (4, 5)]\n\nTupleView{3, 1}(x):\n> [(1, 2, 3), (2, 3, 4), (3, 4, 5), (4, 5, 6)]\n\nTupleView can be used together with reinterpret:\n\nx = [1, 2, 3, 4]\ny = reinterpret(Point{2, Int}, TupleView{2, 1}(x))\n> [Point(1, 2), Point(2, 3), Point(3, 4)]\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.UVMesh","page":"API Reference","title":"GeometryBasics.UVMesh","text":"UVMesh{Dim, T}\n\nPlainMesh with texture coordinates meta at each point. uvmesh.uv isa AbstractVector{Vec2f0}\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.area-Union{Tuple{FT}, Tuple{VT}, Tuple{AbstractArray{#s45,1} where #s45<:AbstractPoint{3,VT},NgonFace{3,FT}}} where FT where VT","page":"API Reference","title":"GeometryBasics.area","text":"area(vertices::AbstractVector{AbstractPoint{3}}, face::TriangleFace)\n\nCalculate the area of one triangle.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.area-Union{Tuple{FT}, Tuple{VT}, Tuple{AbstractArray{#s46,1} where #s46<:AbstractPoint{3,VT},AbstractArray{NgonFace{3,FT},1}}} where FT where VT","page":"API Reference","title":"GeometryBasics.area","text":"area(vertices::AbstractVector{AbstractPoint{3}}, faces::AbstractVector{TriangleFace})\n\nCalculate the area of all triangles.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.connect-Union{Tuple{Point}, Tuple{AbstractArray{Point,1},Type{#s45} where #s45<:(Polytope{N,T} where T where N)}, Tuple{AbstractArray{Point,1},Type{#s44} where #s44<:(Polytope{N,T} where T where N),Int64}} where Point<:AbstractPoint","page":"API Reference","title":"GeometryBasics.connect","text":"connect(points::AbstractVector{<: AbstractPoint}, P::Type{<: Polytype{N}}, skip::Int = N)\n\nCreates a view that connects a number of points to a Polytope P. Between each polytope, skip elements are skipped untill the next starts. Example: ```julia x = connect(Point[(1, 2), (3, 4), (5, 6), (7, 8)], Line, 2) x == [Line(Point(1, 2), Point(3, 4)), Line(Point(5, 6), Point(7, 8))]\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.convert_simplex-Union{Tuple{N}, Tuple{T}, Tuple{Type{NgonFace{2,T}},Union{NgonFace{N,T} where T, SimplexFace{N,T} where T}}} where N where T","page":"API Reference","title":"GeometryBasics.convert_simplex","text":"convert_simplex(::Type{Face{2}}, f::Face{N})\n\nExtract all line segments in a Face.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.convert_simplex-Union{Tuple{N}, Tuple{T}, Tuple{Type{NgonFace{3,T}},Union{NgonFace{N,T} where T, SimplexFace{N,T} where T}}} where N where T","page":"API Reference","title":"GeometryBasics.convert_simplex","text":"convert_simplex(::Type{Face{3}}, f::Face{N})\n\nTriangulate an N-Face into a tuple of triangular faces.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.coordinates-Tuple{AbstractArray{#s25,1} where #s25<:AbstractPoint}","page":"API Reference","title":"GeometryBasics.coordinates","text":"coordinates(geometry)\n\nReturns the edges/vertices/coordinates of a geometry. Is allowed to return lazy iterators! Use decompose(ConcretePointType, geometry) to get Vector{ConcretePointType} with ConcretePointType to be something like Point{3, Float32}.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.decompose-Union{Tuple{FaceType}, Tuple{P}, Tuple{Type{FaceType},AbstractArray{P,N} where N}} where FaceType<:AbstractFace where P<:AbstractPoint","page":"API Reference","title":"GeometryBasics.decompose","text":"faces(contour::AbstractArray{Point}, [facetype = GLTriangleFace])\n\nTriangulates a Polygon given as an AbstractArray{Point} without holes. It will return a Vector{facetype}, defining indexes into contour\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.faces-Tuple{AbstractArray{#s25,1} where #s25<:AbstractFace}","page":"API Reference","title":"GeometryBasics.faces","text":"faces(geometry)\n\nReturns the face connections of a geometry. Is allowed to return lazy iterators! Use decompose(ConcreteFaceType, geometry) to get Vector{ConcreteFaceType} with ConcreteFaceType to be something like TriangleFace{Int}.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.intersects-Union{Tuple{T2}, Tuple{T1}, Tuple{GeometryBasics.Ngon{2,T1,2,Point{2,T1}},GeometryBasics.Ngon{2,T2,2,Point{2,T2}}}} where T2 where T1","page":"API Reference","title":"GeometryBasics.intersects","text":"intersect(a::Line, b::Line) -> Point\n\nIntersection of 2 line segmens a and b. Returns intersectionfound::Bool, intersectionpoint\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.meta-Tuple{MetaT}","page":"API Reference","title":"GeometryBasics.meta","text":"meta(x::MetaT)\nmeta(x::Array{MetaT})\n\nReturns the metadata of a MetaT\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.meta-Union{Tuple{T}, Tuple{T}} where T","page":"API Reference","title":"GeometryBasics.meta","text":"meta(x::MetaObject)\n\nReturns the metadata of x\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.meta_table-Tuple{Any}","page":"API Reference","title":"GeometryBasics.meta_table","text":"Puts an iterable of MetaT's into a StructArray \n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.metafree-Tuple{MetaT}","page":"API Reference","title":"GeometryBasics.metafree","text":"metafree(x::MetaT)\nmetafree(x::Array{MetaT})\n\nFree the MetaT from metadata i.e. returns the geometry/array of geometries\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.normals-Union{Tuple{F}, Tuple{T}, Tuple{AbstractArray{#s41,1} where #s41<:AbstractPoint{3,T},AbstractArray{F,1}}} where F<:NgonFace where T","page":"API Reference","title":"GeometryBasics.normals","text":"normals{VT,FD,FT,FO}(vertices::Vector{Point{3, VT}},\n                    faces::Vector{Face{FD,FT,FO}},\n                    NT = Normal{3, VT})\n\nCompute all vertex normals.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.pointmeta-Tuple{Mesh}","page":"API Reference","title":"GeometryBasics.pointmeta","text":"pointmeta(mesh::Mesh; meta_data...)\n\nAttaches metadata to the coordinates of a mesh\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.self_intersections-Tuple{AbstractArray{#s39,1} where #s39<:AbstractPoint}","page":"API Reference","title":"GeometryBasics.self_intersections","text":"self_intersections(points::AbstractVector{AbstractPoint})\n\nFinds all self intersections of polygon points\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.split_intersections-Tuple{AbstractArray{#s44,1} where #s44<:AbstractPoint}","page":"API Reference","title":"GeometryBasics.split_intersections","text":"split_intersections(points::AbstractVector{AbstractPoint})\n\nSplits polygon points into it's self intersecting parts. Only 1 intersection is handled right now.\n\n\n\n\n\n","category":"method"},{"location":"api/#Private","page":"API Reference","title":"Private","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Modules = [GeometryBasics]\nOrder   = [:module, :constant, :type, :function, :macro]\nPublic  = false\nPrivate = true","category":"page"},{"location":"api/#GeometryBasics.HyperRectangle","page":"API Reference","title":"GeometryBasics.HyperRectangle","text":"HyperRectangle{N, T}\n\nA HyperRectangle is a generalization of a rectangle into N-dimensions. Formally it is the cartesian product of intervals, which is represented by the origin and width fields, whose indices correspond to each of the N axes.\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Ngon","page":"API Reference","title":"GeometryBasics.Ngon","text":"Fixed Size Polygon, e.g.\n\nN 1-2 : Illegal!\nN = 3 : Triangle\nN = 4 : Quadrilateral (or Quad, Or tetragon)\nN = 5 : Pentagon\n...\n\n\n\n\n\n","category":"type"},{"location":"api/#GeometryBasics.Quad","page":"API Reference","title":"GeometryBasics.Quad","text":"Quad{T}\n\nA rectangle in 3D space.\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.:*-Union{Tuple{T2}, Tuple{T1}, Tuple{N2}, Tuple{N1}, Tuple{StaticArrays.SArray{Tuple{N1,N1},T1,2,L} where L,GeometryBasics.HyperRectangle{N2,T2}}} where T2 where T1 where N2 where N1","page":"API Reference","title":"Base.:*","text":"*(m::Mat, h::Rect)\n\nTransform a Rect using a matrix. Maintains axis-align properties so a significantly larger Rect may be generated.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.in-Union{Tuple{N}, Tuple{GeometryBasics.HyperRectangle{N,T} where T,GeometryBasics.HyperRectangle{N,T} where T}} where N","page":"API Reference","title":"Base.in","text":"in(b1::Rect, b2::Rect)\n\nCheck if Rect b1 is contained in b2. This does not use strict inequality, so Rects may share faces and this will still return true.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.in-Union{Tuple{N}, Tuple{T}, Tuple{Union{Tuple{Vararg{T,N}}, StaticArrays.StaticArray{Tuple{N},T,1}} where T where N,GeometryBasics.HyperRectangle{N,T}}} where N where T","page":"API Reference","title":"Base.in","text":"in(pt::VecTypes, b1::Rect{N, T})\n\nCheck if a point is contained in a Rect. This will return true if the point is on a face of the Rect.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.in-Union{Tuple{T}, Tuple{T,GeometryBasics.Ngon{Dim,T,3,Point{Dim,T}} where T where Dim}} where T<:AbstractPoint","page":"API Reference","title":"Base.in","text":"in(point, triangle)\n\nInsideTriangle decides if a point P is Inside of the triangle  defined by A, B, C.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.union-Union{Tuple{N}, Tuple{GeometryBasics.HyperRectangle{N,T} where T,GeometryBasics.HyperRectangle{N,T} where T}} where N","page":"API Reference","title":"Base.union","text":"Perform a union between two Rects.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.MetaFree-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"API Reference","title":"GeometryBasics.MetaFree","text":"MetaFree(::Type{T})\n\nReturns the original type containing no metadata for T E.g:\n\nMetaFree(PointMeta) == Point\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.MetaType-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"API Reference","title":"GeometryBasics.MetaType","text":"MetaType(::Type{T})\n\nReturns the Meta Type corresponding to T E.g:\n\nMetaType(Point) == PointMeta\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.attributes-Tuple{Any}","page":"API Reference","title":"GeometryBasics.attributes","text":"attributes(hasmeta)\n\nReturns all attributes of meta as a Dict{Symbol, Any}. Needs to be overloaded, and returns empty dict for non overloaded types! Gets overloaded by default for all Meta types.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.diff-Tuple{GeometryBasics.HyperRectangle{N,T} where T where N,GeometryBasics.HyperRectangle{N,T} where T where N}","page":"API Reference","title":"GeometryBasics.diff","text":"diff(h1::Rect, h2::Rect)\n\nPerform a difference between two Rects.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.facemeta-Tuple{Mesh}","page":"API Reference","title":"GeometryBasics.facemeta","text":"facemeta(mesh::Mesh; meta_data...)\n\nAttaches metadata to the faces of a mesh\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.getcolumns-Tuple{Any,Vararg{Symbol,N} where N}","page":"API Reference","title":"GeometryBasics.getcolumns","text":"getcolumns(t, colnames::Symbol...)\n\nGets a column from any Array like (Table/AbstractArray). For AbstractVectors, a column will be the field names of the element type.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.intersect-Union{Tuple{N}, Tuple{GeometryBasics.HyperRectangle{N,T} where T,GeometryBasics.HyperRectangle{N,T} where T}} where N","page":"API Reference","title":"GeometryBasics.intersect","text":"intersect(h1::Rect, h2::Rect)\n\nPerform a intersection between two Rects.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.mesh-Tuple{Union{GeometryPrimitive{Dim,T}, AbstractArray{#s26,1} where #s26<:AbstractPoint{Dim,T}, Mesh{Dim,T,Element,V} where V<:AbstractArray{Element,1} where Element<:Polytope{Dim,T}, Tesselation{Dim,T,Primitive,NGrid} where NGrid where Primitive} where T where Dim}","page":"API Reference","title":"GeometryBasics.mesh","text":"mesh(primitive::GeometryPrimitive;\n     pointtype=Point, facetype=GLTriangle,\n     uvtype=nothing, normaltype=nothing)\n\nCreates a mesh from primitive. Uses the element types from the keyword arguments to create the attributes. The attributes that have their type set to nothing are not added to the mesh. Note, that this can be an Int or Tuple{Int, Int}`, when the primitive is grid based. It also only losely correlates to the number of vertices, depending on the algorithm used. #TODO: find a better number here!\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.mesh-Union{Tuple{AbstractArray{P,1}}, Tuple{P}} where P<:(AbstractPoint{2,T} where T)","page":"API Reference","title":"GeometryBasics.mesh","text":"mesh(polygon::AbstractVector{P}; pointtype=P, facetype=GLTriangleFace,\n     normaltype=nothing)\n\nPolygon triangluation!\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.orthogonal_vector-Tuple{Any,Any,Any}","page":"API Reference","title":"GeometryBasics.orthogonal_vector","text":"The unnormalized normal of three vertices.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.pop_pointmeta-Tuple{Mesh,Symbol}","page":"API Reference","title":"GeometryBasics.pop_pointmeta","text":"pop_pointmeta(mesh::Mesh, property::Symbol)\n\nRemove property from point metadata. Returns the new mesh, and the property!\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.split-Tuple{GeometryBasics.HyperRectangle{N,T} where T where N,Any,Integer}","page":"API Reference","title":"GeometryBasics.split","text":"split(rectangle, axis, value)\n\nSplits an Rect into two along an axis at a given location.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.volume-Union{Tuple{GeometryBasics.Ngon{Dim,T,3,Point{Dim,T}} where T where Dim}, Tuple{FT}, Tuple{VT}} where FT where VT","page":"API Reference","title":"GeometryBasics.volume","text":"volume(triangle)\n\nCalculate the signed volume of one tetrahedron. Be sure the orientation of your surface is right.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeometryBasics.volume-Union{Tuple{Mesh}, Tuple{FT}, Tuple{VT}} where FT where VT","page":"API Reference","title":"GeometryBasics.volume","text":"volume(mesh)\n\nCalculate the signed volume of all tetrahedra. Be sure the orientation of your surface is right.\n\n\n\n\n\n","category":"method"},{"location":"distancefields/#Distance-Fields","page":"Distance Fields","title":"Distance Fields","text":"","category":"section"},{"location":"polygons/#Polygons","page":"Polygons","title":"Polygons","text":"","category":"section"},{"location":"primitives/#Primitives","page":"Primitives","title":"Primitives","text":"","category":"section"},{"location":"primitives/#Points-and-Vectors","page":"Primitives","title":"Points and Vectors","text":"","category":"section"},{"location":"primitives/#Simplices","page":"Primitives","title":"Simplices","text":"","category":"section"},{"location":"primitives/#Shapes","page":"Primitives","title":"Shapes","text":"","category":"section"},{"location":"primitives/","page":"Primitives","title":"Primitives","text":"Circle\nSphere\nCylinder","category":"page"},{"location":"primitives/#Abstract-types","page":"Primitives","title":"Abstract types","text":"","category":"section"},{"location":"primitives/","page":"Primitives","title":"Primitives","text":"GeometryPrimitive\nAbstractSimplex\nAbstractMesh\nAbstractDistanceField","category":"page"},{"location":"decomposition/#Decomposition","page":"Decomposition","title":"Decomposition","text":"","category":"section"},{"location":"decomposition/#GeometryBasic-Mesh-interface","page":"Decomposition","title":"GeometryBasic Mesh interface","text":"","category":"section"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"GeometryBasic defines an interface, to decompose abstract geometries into points and triangle meshes. This can be done for any arbitrary primitive, by overloading the following interface:","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"\nfunction GeometryBasics.coordinates(rect::Rect2D, nvertices=(2,2))\n    mini, maxi = extrema(rect)\n    xrange, yrange = LinRange.(mini, maxi, nvertices)\n    return ivec(((x,y) for x in xrange, y in yrange))\nend\n\nfunction GeometryBasics.faces(rect::Rect2D, nvertices=(2, 2))\n    w, h = nvertices\n    idx = LinearIndices(nvertices)\n    quad(i, j) = QuadFace{Int}(idx[i, j], idx[i+1, j], idx[i+1, j+1], idx[i, j+1])\n    return ivec((quad(i, j) for i=1:(w-1), j=1:(h-1)))\nend","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"Those methods, for performance reasons, expect you to return an iterator, to make materializing them with different element types allocation free. But of course, can also return any AbstractArray.","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"With these methods defined, this constructor will magically work:","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"rect = Rect2D(0.0, 0.0, 1.0, 1.0)\nm = GeometryBasics.mesh(rect)","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"If you want to set the nvertices argument, you need to wrap your primitive in a Tesselation object:","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"m = GeometryBasics.mesh(Tesselation(rect, (50, 50)))\nlength(coordinates(m)) == 50^2","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"As you can see, coordinates and faces is also defined on a mesh","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"coordinates(m)\nfaces(m)","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"But will actually not be an iterator anymore. Instead, the mesh constructor uses the decompose function, that will collect the result of coordinates and will convert it to a concrete element type:","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"decompose(Point2f0, rect) == convert(Vector{Point2f0}, collect(coordinates(rect)))","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"The element conversion is handled by simplex_convert, which also handles convert between different face types:","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"decompose(QuadFace{Int}, rect) == convert(Vector{QuadFace{Int}}, collect(faces(rect)))\nlength(decompose(QuadFace{Int}, rect)) == 1\nfs = decompose(GLTriangleFace, rect)\nfs isa Vector{GLTriangleFace}\nlength(fs) == 2 # 2 triangles make up one quad ;)","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"mesh uses the most natural element type by default, which you can get with the unqualified Point type:","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"decompose(Point, rect) isa Vector{Point{2, Float64}}","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"You can also pass the element type to mesh:","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"m = GeometryBasics.mesh(rect, pointtype=Point2f0, facetype=QuadFace{Int})","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"You can also set the uv and normal type for the mesh constructor, which will then calculate them for you, with the requested element type:","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"m = GeometryBasics.mesh(rect, uv=Vec2f0, normaltype=Vec3f0)","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"As you can see, the normals are automatically calculated, the same is true for texture coordinates. You can overload this behavior by overloading normals or texturecoordinates the same way as coordinates. decompose works a bit different for normals/texturecoordinates, since they dont have their own element type. Instead, you can use decompose like this:","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"decompose(UV(Vec2f0), rect)\ndecompose(Normal(Vec3f0), rect)\n# the short form for the above:\ndecompose_uv(rect)\ndecompose_normals(rect)","category":"page"},{"location":"decomposition/","page":"Decomposition","title":"Decomposition","text":"You can also use triangle_mesh, normal_mesh and uv_normal_mesh to call the mesh constructor with predefined element types (Point2/3f0, Vec2/3f0), and the requested attributes.","category":"page"},{"location":"rectangles/#Rectangles","page":"Rectangles","title":"Rectangles","text":"","category":"section"},{"location":"","page":"GeometryBasics.jl","title":"GeometryBasics.jl","text":"(Image: Build Status) (Image: Codecov)","category":"page"},{"location":"","page":"GeometryBasics.jl","title":"GeometryBasics.jl","text":"Documentation: (Image: Docs - stable) (Image: Docs - dev)","category":"page"},{"location":"#GeometryBasics.jl","page":"GeometryBasics.jl","title":"GeometryBasics.jl","text":"","category":"section"},{"location":"","page":"GeometryBasics.jl","title":"GeometryBasics.jl","text":"Basic Geometry Types. This package aimes to offer a standard set of Geometry types, which easily work with metadata, query frameworks on geometries and different memory layouts. The aim is to create a solid basis for Graphics/Plotting, finite elements analysis, Geo applications, and general geometry manipulations - while offering a julian API, that still allows performant C-interop.","category":"page"},{"location":"","page":"GeometryBasics.jl","title":"GeometryBasics.jl","text":"This package is a replacement for the discontinued GeometryTypes.","category":"page"},{"location":"#Quick-start","page":"GeometryBasics.jl","title":"Quick start","text":"","category":"section"},{"location":"","page":"GeometryBasics.jl","title":"GeometryBasics.jl","text":"using GeometryBasics\n\n# create some points\njulia> p1 = Point(3, 1)\n2-element Point{2,Int64} with indices SOneTo(2):\n 3\n 1\n\njulia> p2 = Point(1, 3);\n\njulia> p3 = Point(4, 4);\n\n# geometries can carry metadata\njulia> poi = meta(p1, city=\"Abuja\", rainfall=1221.2)\n2-element PointMeta{2,Int64,Point{2,Int64},(:city, :rainfall),Tuple{String,Float64}} with indices SOneTo(2):\n 3\n 1\n\n# metadata is stored in a NamedTuple and can be retrieved as such\njulia> meta(poi)\n(city = \"Abuja\", rainfall = 1221.2)\n\n# specific metadata attributes can be directly retrieved\njulia> poi.rainfall\n1221.2\n\n# to remove the metadata and keep only the geometry, use metafree\njulia> metafree(poi)\n2-element Point{2,Int64} with indices SOneTo(2):\n 3\n 1\n\n# for other geometries metatypes are predefined\njulia> multipoi = MultiPointMeta([p1], city=\"Abuja\", rainfall=1221.2)\n1-element MultiPointMeta{Point{2,Int64},MultiPoint{2,Int64,Point{2,Int64},Array{Point{2,Int64},1}},(:city, :rainfall),Tuple{String,Float64}}:\n[3, 1]\n\n# connect the points with lines\njulia> l1 = Line(p1, p2)\nLine([3, 1] => [1, 3])\n\njulia> l2 = Line(p2, p3);\n\n# connect the lines in a linestring\njulia> LineString([l1, l2])\n2-element LineString{2,Int64,Point{2,Int64},Array{GeometryBasics.Ngon{2,Int64,2,Point{2,Int64}},1}}:\n Line([3, 1] => [1, 3])\n Line([1, 3] => [4, 4])\n\n# linestrings can also be constructed directly from points\njulia> LineString([p1, p2, p3])\n2-element LineString{2,Int64,Point{2,Int64},Base.ReinterpretArray{GeometryBasics.Ngon{2,Int64,2,Point{2,Int64}},1,Tuple{Point{2,Int64},Point{2,Int64}},TupleView{Tuple{Point{2,Int64},Point{2,Int64}}, 1}}}:\n Line([3, 1] => [1, 3])\n Line([1, 3] => [4, 4])\n\n# the same goes for polygons\njulia> Polygon(Point{2, Int}[(3, 1), (4, 4), (2, 4), (1, 2), (3, 1)])\nPolygon{2,Int64,Point{2,Int64},LineString{2,Int64,Point{2,Int64},Base.ReinterpretArray{GeometryBasics.Ngon{2,Int64,2,Point{2,Int64}},1,Tuple{Point{2,Int64},Point{2,Int64}},TupleView{Tuple{Point{2,Int64},Point{2,Int64}}, 1}}},Array{LineString{2,Int64,Point{2,Int64},Base.ReinterpretArray{GeometryBasics.Ngon{2,Int64,2,Point{2,Int64}},1,Tuple{Point{2,Int64},Point{2,Int64}},TupleView{Tuple{Point{2,Int64},Point{2,Int64}}, 1}}},1}}(GeometryBasics.Ngon{2,Int64,2,Point{2,Int64}}[Line([3, 1] => [4, 4]), Line([4, 4] => [2, 4]), Line([2, 4] => [1, 2]), Line([1, 2] => [3, 1])], LineString{2,Int64,Point{2,Int64},Base.ReinterpretArray{GeometryBasics.Ngon{2,Int64,2,Point{2,Int64}},1,Tuple{Point{2,Int64},Point{2,Int64}},TupleView{Tuple{Point{2,Int64},Point{2,Int64}}, 1}}}[])\n\n# create a rectangle placed at the origin with unit widths\njulia> rect = Rect(Vec(0.0, 0.0), Vec(1.0, 1.0))\nGeometryBasics.HyperRectangle{2,Float64}([0.0, 0.0], [1.0, 1.0])\n\n# decompose the rectangle into two triangular faces\njulia> rect_faces = decompose(TriangleFace{Int}, rect)\n2-element Array{NgonFace{3,Int64},1}:\n TriangleFace(1, 2, 4)\n TriangleFace(1, 4, 3)\n\n# decompose the rectangle into four vertices\njulia> rect_vertices = decompose(Point{2, Float64}, rect)\n4-element Array{Point{2,Float64},1}:\n [0.0, 0.0]\n [1.0, 0.0]\n [0.0, 1.0]\n [1.0, 1.0]\n\n# combine the vertices and faces into a triangle mesh\njulia> mesh = Mesh(rect_vertices, rect_faces)\nMesh{2, Float64, Triangle}:\n Triangle([0.0, 0.0], [1.0, 0.0], [1.0, 1.0])\n Triangle([0.0, 0.0], [1.0, 1.0], [0.0, 1.0])","category":"page"},{"location":"implementation/#Implementation","page":"Implementation","title":"Implementation","text":"","category":"section"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"In the backend, GeometryTypes relies on fixed-size arrays, specifically static vectors.","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"TODO add more here.","category":"page"},{"location":"meshes/#Meshes","page":"Meshes","title":"Meshes","text":"","category":"section"},{"location":"meshes/#Types","page":"Meshes","title":"Types","text":"","category":"section"},{"location":"meshes/","page":"Meshes","title":"Meshes","text":"AbstractMesh\nMesh","category":"page"},{"location":"meshes/#How-to-create-a-mesh","page":"Meshes","title":"How to create a mesh","text":"","category":"section"},{"location":"meshes/#Meshing.jl","page":"Meshes","title":"Meshing.jl","text":"","category":"section"}]
}
