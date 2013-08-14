s.Ship = new Class({
	extend: s.GameObject,

	construct: function(options){
		// handle parameters
		this.options = options = jQuery.extend({
			position: new THREE.Vector3(0, 0, 0),
			rotation: new THREE.Vector3(0, 0, 0)
		}, options);

		var geometry = s.models[options.shipClass].geometry;
		var materials = s.models[options.shipClass].materials;

		this.root = new Physijs.ConvexMesh(geometry, new THREE.MeshFaceMaterial(materials), 100);
		this.root.position.copy(options.position);
		this.root.rotation.copy(options.rotation);
	},
	init: function(_super) {
		_super.call(this);

		// Just make it rotate, for show
		this.root.setAngularVelocity(new THREE.Vector3(0, -Math.PI/8, 0));
		this.root.applyCentralImpulse(new THREE.Vector3(0, -10000, 0));
	},
	update: function() {
		// Keep the simulation alive by applying a blank impulse
		// This won't be needed once objects are flying around/colliding
		// this.root.applyCentralImpulse(new THREE.Vector3());
	}
});